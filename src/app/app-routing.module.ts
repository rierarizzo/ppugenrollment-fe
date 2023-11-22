import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDrawerComponent } from './layout/nav-drawer/nav-drawer.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "admin",
    data: {
      layout: "dashboard",
    },
    component: NavDrawerComponent,
    children: [
      {
        path: 'project',
        loadChildren: () => import('./module/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "project",
      },
      {
        path: "**",
        redirectTo: "project",
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "auth"
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
