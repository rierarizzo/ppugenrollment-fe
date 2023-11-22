import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  typePassword: boolean = true;
  loginForm!: FormGroup;

  constructor( 
    private builder: FormBuilder
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

}
