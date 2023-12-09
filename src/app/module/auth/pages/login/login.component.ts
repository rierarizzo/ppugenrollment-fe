import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  typePassword: boolean = true;
  loginForm!: FormGroup;
  showRegister:boolean = false;

  constructor( 
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
      this.loginForm = this.builder.group({
        user: ["", [Validators.required]],
        password: ["", Validators.required],
      });
  }

  signIn(){
    this.router.navigateByUrl("/admin/project/list-project");
  }

  showLogin(event: boolean){
    this.showRegister = !this.showRegister;
  }

}
