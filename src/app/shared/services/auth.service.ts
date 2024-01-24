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

  userIsAdmin(): boolean {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const role: string = userData.data.role;

    if (role !== "M") {
      return false;
    }

    return true;
  }

  userIsApprover(): boolean {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const role: string = userData.data.role;

    if (role !== "A") {
      return false;
    }

    return true;
  }

  userIsStudent(): boolean {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    const role: string = userData.data.role;

    if (role !== "S") {
      return false;
    }

    return true;
  }
}
