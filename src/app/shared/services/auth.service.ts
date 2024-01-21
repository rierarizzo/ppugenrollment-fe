import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serviceHost: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  registerUser(user: User) {
    return this.http.post(this.serviceHost + "/authentication/register", user)
  }

  loginUser(user: User) {
    return this.http.post(this.serviceHost + "/authentication/login", user);
  }

  saveUserDataToLocalStorage(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
