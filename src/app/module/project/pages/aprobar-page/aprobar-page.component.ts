import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsService } from 'src/app/shared/services/projects.service';



@Component({
  selector: 'app-aprobar-page',
  templateUrl: './aprobar-page.component.html',
  styleUrl: './aprobar-page.component.scss'
})
export class AprobarPageComponent implements OnInit{
  listOfData: IProject[] = []   
  solicitud:any 

  constructor (private projectService: ProjectsService){}

  ngOnInit(): void {
      this.listOfData = this.projectService.getProjects();
  }
}
