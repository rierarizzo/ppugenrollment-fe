import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsService } from 'src/app/shared/services/projects.service';



@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent  implements OnInit{
  listOfData: IProject[] = []   

  constructor (private projectService: ProjectsService){}

  ngOnInit(): void {
      this.listOfData = this.projectService.getProjects();
  }
}
