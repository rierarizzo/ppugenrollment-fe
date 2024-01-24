import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectService } from 'src/app/shared/services/project.service';



@Component({
  selector: 'app-aprobar-page',
  templateUrl: './aprobar-page.component.html',
  styleUrl: './aprobar-page.component.scss'
})
export class AprobarPageComponent implements OnInit {
  listOfData: IProject[] = []
  solicitud: any

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
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
            supervisor: ''
          });
        }

      }, error: console.error
    });
  }
}
