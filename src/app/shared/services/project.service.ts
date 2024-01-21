import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    return this.http.get(this.serviceHost + "/project/getAllProjects", {headers})
  }
}
