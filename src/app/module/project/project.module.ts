import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ListProjectComponent,
    AddProjectComponent
  ]
})
export class ProjectModule { }
