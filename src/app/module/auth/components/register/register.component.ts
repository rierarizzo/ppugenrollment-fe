import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  typePassword: boolean = true;
  confirmShowPassword: boolean = true;
  registerForm!: FormGroup;

  @Output() returnLogin: EventEmitter<boolean> =
  new EventEmitter<boolean>();

  constructor( 
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
      this.registerForm = this.builder.group({
        user: ["", [Validators.required]],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      });
  }

  registerUser(){
    this.router.navigateByUrl("/auth/login");
  }

  returnToLogin(){
    this.returnLogin.emit(true);
  }

}
