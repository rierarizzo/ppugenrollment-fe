import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from "../../../../shared/entities/user";
import {AuthService} from "../../../../shared/services/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  typePassword: boolean = true;
  confirmShowPassword: boolean = true;
  registerForm!: FormGroup;

  @Output() returnLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private builder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.builder.group({
      idCardNumber: ["", [Validators.required]],
      name: ["", [Validators.required]],
      surname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      role: ["", Validators.required]
    });
  }

  registerUser() {
    let user = new User();
    user.id_card_number = this.registerForm.value.idCardNumber;
    user.name = this.registerForm.value.name;
    user.surname = this.registerForm.value.surname;
    user.email = this.registerForm.value.email;
    user.password = this.registerForm.value.password;
    user.role = this.registerForm.value.role;

    this.authService.registerUser(user).subscribe({
      next: (v) => {
        Swal.fire({
          title: "Registrado",
          text: "Su usuario ha sido registrado con éxito, por favor, inicia sesión.",
          icon: "success"
        });
      }, error: console.error
    });
  }

  returnToLogin() {
    this.returnLogin.emit(true);
  }

}
