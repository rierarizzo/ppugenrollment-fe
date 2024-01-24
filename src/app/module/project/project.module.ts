import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AprobarPageComponent } from './pages/aprobar-page/aprobar-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzTableModule,
    NzDividerModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ListProjectComponent,
    AddProjectComponent,
    AprobarPageComponent
  ]
})
export class ProjectModule { }
