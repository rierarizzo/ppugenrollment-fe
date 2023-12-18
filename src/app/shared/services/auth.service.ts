import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post("http://localhost:80/authentication/register", user)
  }
}
