import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectRequest } from 'src/app/shared/entities/project';
import { ICompany } from 'src/app/shared/interfaces/company.interface';
import { ProjectService } from 'src/app/shared/services/project.service';
import Swal from 'sweetalert2';

interface IProject {
  key: string;
  projectName: string;
  company: string;
  supervisor: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit {

  listOfData: IProject[] = [];
  addProjectForm!: FormGroup;
  companies: ICompany[] = [];

  createForm() {
    this.addProjectForm = this.builder.group({
      company: [0, [Validators.required]],
      name: ["", Validators.required],
      description: ["", [Validators.required]],
      schedules: ["", [Validators.required]],
      starts: ["", [Validators.required]],
      ends: ["", [Validators.required]]
    });
  }


  constructor(private builder: FormBuilder, private projectService: ProjectService) {
    this.createForm();

    projectService.getCompanies().subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));

        console.log(resp.data);

        if (resp.data === null) {
          this.companies = [];
        }

        for (let e of resp.data) {
          this.companies.push({
            key: e.id,
            name: e.name
          });
        }

        console.log(this.companies);
      }, error: console.error
    });
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));

        console.log(resp.data);

        if (resp.data === null) {
          this.listOfData = [];
        }

        for (let e of resp.data) {
          this.listOfData.push({
            key: e.id,
            projectName: e.name,
            company: e.company.name,
            supervisor: '',
            startDate: e.starts,
            endDate: e.ends,
          });
        }

        console.log(this.listOfData);
      }, error: console.error
    });
  }

  solicitarMatricula(project: any) {
    Swal.fire({
      title: "¿Estás seguro que deseas solicitar matricula en este proyecto?",
      text: "¡No podrás anular la solicitud!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Solicitar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Matrícula solicitada",
          text: "Has solicitado matrícula en el proyecto '" + project.projectName + "'",
          icon: "success"
        });

        this.projectService.enrollToProject({
          project: project.key,
          schedule: 1
        }).subscribe({
          next: (res) => {
            console.log(res);
          }, error: console.error
        });
      }
    });
  }

  createProject() {
    let request = new ProjectRequest();
    console.log(this.addProjectForm.value);
    let company = String(this.addProjectForm.value.company);
    request.company = parseInt(company.trim());
    request.name = this.addProjectForm.value.name;
    request.description = this.addProjectForm.value.description;
    let schedules = [];
    for (let s of this.addProjectForm.value.schedules) {
      schedules.push(String(s));
    }

    request.schedules = schedules;
    let startsObject = new Date((<HTMLInputElement>document.getElementById("starts")).value)
    request.starts = startsObject.toISOString();
    let endsObject = new Date((<HTMLInputElement>document.getElementById("ends")).value)
    request.ends = endsObject.toISOString();


    console.log(request);
    this.projectService.insertNewProject(request).subscribe({
      next: () => {
        Swal.fire({
          title: "Creado",
          text: "El proyecto se ha creado con éxito",
          icon: "success"
        }).then(() => {
          this.listOfData = [];
          this.ngOnInit();
        });
      }, error: console.error
    })
  }

  borrar(value: any) {
    console.log(value);

    Swal.fire({
      title: "¿Estás seguro que deseas eliminar el proyecto?",
      text: "¡No podrás deshacer la acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Proyecto eliminado",
          text: "Has eliminado el proyecto '" + value.projectName + "'",
          icon: "success"
        });

        this.projectService.deleteProject(value.key).subscribe({
          next: () => {
            this.listOfData = [];
            this.ngOnInit();
          }, error: console.error
        })
      }
    });
  }

  modificar() {
    let request = new ProjectRequest();
    request.id = this.selectedProjectId;
    let company = String(this.addProjectForm.value.company);
    request.company = parseInt(company.trim());
    request.name = this.addProjectForm.value.name;
    request.description = this.addProjectForm.value.description;
    let schedules = [];
    for (let s of this.addProjectForm.value.schedules) {
      schedules.push(String(s));
    }

    request.schedules = schedules;
    let startsObject = new Date((<HTMLInputElement>document.getElementById("starts")).value)
    request.starts = startsObject.toISOString();
    let endsObject = new Date((<HTMLInputElement>document.getElementById("ends")).value)
    request.ends = endsObject.toISOString();


    console.log(request);
    this.projectService.updateProject(request).subscribe({
      next: () => {
        Swal.fire({
          title: "Creado",
          text: "El proyecto se ha creado con éxito",
          icon: "success"
        }).then(() => {
          this.listOfData = [];
          this.ngOnInit();
        });
      }, error: console.error
    })
  }

  selectedProjectId: any;

  actualizarFilaSeleccionada(data: any) {
    this.selectedProjectId = data;

    this.projectService.getProjectById(data.key).subscribe({
      next: (res) => {
        const resp = JSON.parse(JSON.stringify(res));

        console.log(resp.data);
        this.selectedProjectId = resp.data.id;

        let startsDate = new Date(resp.data.starts);
        let formattedStartsDate = (startsDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
          startsDate.getDate().toString().padStart(2, '0') + '/' +
          startsDate.getFullYear();

        let endsDate = new Date(resp.data.ends);
        let formattedEndsDate = (endsDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
          endsDate.getDate().toString().padStart(2, '0') + '/' +
          endsDate.getFullYear();

        this.addProjectForm = this.builder.group({
          company: [resp.data.company.id, [Validators.required]],
          name: [resp.data.name, Validators.required],
          description: [resp.data.description, [Validators.required]],
          schedules: [resp.data.schedule, [Validators.required]],
          starts: [formattedStartsDate, [Validators.required]],
          ends: [formattedEndsDate, [Validators.required]]
        });
      }, error: console.error
    });
  }

}
