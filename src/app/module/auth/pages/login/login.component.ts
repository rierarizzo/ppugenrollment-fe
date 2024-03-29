import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../../../../shared/entities/user";
import { AuthService } from "../../../../shared/services/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  typePassword: boolean = true;
  loginForm!: FormGroup;
  showRegister: boolean = false;

  constructor(private builder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      user: ["", [Validators.required]], password: ["", Validators.required],
    });
  }

  signIn() {
    let user = new User();
    user.email = this.loginForm.value.user;
    user.password = this.loginForm.value.password;

    this.authService.loginUser(user).subscribe({
      next: (d) => {
        console.log(d)
        this.authService.saveUserDataToLocalStorage(d);
        this.router.navigateByUrl("/admin/project/list-project").then(r => console.log(r));
      }, error: (err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Tus credenciales son incorrectas",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

  }

  showLogin(event: boolean) {
    this.showRegister = !this.showRegister;
  }

}
