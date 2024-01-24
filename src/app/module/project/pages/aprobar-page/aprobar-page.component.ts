import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-aprobar-page',
  templateUrl: './aprobar-page.component.html',
  styleUrl: './aprobar-page.component.scss'
})
export class AprobarPageComponent implements OnInit {
  listOfData: IProject[] = [];
  solicitud: any;
  schedulesList = { "M": "Matutino", "E": "Vespertino", "N": "Nocturno" };
  comentarios: string = "ok";

  constructor(private projectService: ProjectService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.userIsApprover()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No eres aprobador, ¡no puedes estar acá!"
      }).then(() => { this.router.navigateByUrl('/admin/project/list-project') });;
    }

    this.projectService.getEnrollmentApplications().subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));

        console.log(resp.data);

        if (resp.data === null) {
          this.listOfData = [];
        }

        for (let e of resp.data) {
          let status = "Pendiente"
          if (e.status === "A") {
            status = "Aprobado"
          }

          this.listOfData.push({
            key: e.id,
            projectName: e.project_name,
            company: e.company_name,
            startDate: '',
            endDate: '',
            estudiante: e.student_name + " " + e.student_surname,
            estado: status,
            supervisor: '',
            id: e.id,
            horario: this.schedulesList[String(e.schedule_code) as keyof typeof this.schedulesList],
            comentarios: ''
          });
        }

      }, error: console.error
    });
  }

  aprobar(data: IProject) {
    this.solicitud = data;

    if (data.estado === "Aprobado") {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Ya se encuentra aprobado',
      });
      return;
    }

    this.projectService.approveEnrollmentApplication(data.id, this.comentarios).subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));
        console.log(resp);
        if (resp.status_code === 202) {
          Swal.fire({
            icon: 'success',
            title: '¡Solicitud aprobada!',
            text: 'La solicitud fue aprobada con éxito',
          }).then(() => {
            this.ngOnInit();
            this.listOfData = [];
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Hubo un error al aprobar la solicitud',
          });
        }
      }, error: console.error
    });

  }
}
