import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollmentApplication } from '../entities/enrollmentApplication';
import { ProjectRequest } from '../entities/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serviceHost: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getAllProjects() {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.serviceHost + "/project/getAllProjects", { headers })
  }

  getProjectById(id: number) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.serviceHost + "/project/getProjectById/" + id, { headers })
  }

  updateProject(request: ProjectRequest) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.put(this.serviceHost + "/project/updateProject/" + request.id, request, { headers: headers })
  }

  getEnrollmentApplications() {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.get(this.serviceHost + "/enrollment/getEnrollmentApplications", { headers })
  }

  enrollToProject(application: EnrollmentApplication) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.post(this.serviceHost + "/enrollment/enrollToProject", application, { headers: headers })
  }

  insertNewProject(request: ProjectRequest) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.post(this.serviceHost + "/project/insertNewProject", request, { headers: headers })
  }

  getCompanies() {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.get(this.serviceHost + "/project/getCompanies", { headers })
  }

  deleteProject(id: number) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.delete(this.serviceHost + "/project/deleteProject/" + id, { headers })
  }

  getSchedulesByProjectId(id: number) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.get(this.serviceHost + "/project/getSchedulesByProjectId/" + id, { headers })
  }

  approveEnrollmentApplication(id: number, comentarios: string) {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const token: string = userData.data.authentication_result.access_token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.trim()}`
    });

    return this.http.post(this.serviceHost + "/approval/approveEnrollmentApplication/" + id + "/" + comentarios, null, { headers: headers })
  }
}
