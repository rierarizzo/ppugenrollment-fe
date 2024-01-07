import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post("http://localhost:8080/authentication/register", user)
  }

  loginUser(user: User) {
    return this.http.post("http://localhost:8080/authentication/login", user)
  }
}
