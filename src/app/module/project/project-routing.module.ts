import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListProjectComponent } from "./pages/list-project/list-project.component";
import { AprobarPageComponent } from "./pages/aprobar-page/aprobar-page.component";

const routes: Routes = [
  {
    path: 'list-project',
    component: ListProjectComponent,
  },
  {
    path: 'aprobar',
    component: AprobarPageComponent,
  },
  {
    path: '',
    redirectTo: 'list-project',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'list-project' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }
