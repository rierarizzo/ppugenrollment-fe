import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../../../shared/entities/user";
import {AuthService} from "../../../../shared/services/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  typePassword: boolean = true;
  confirmShowPassword: boolean = true;
  selectedRole: string = "";
  registerForm!: FormGroup;

  @Output() returnLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private builder: FormBuilder, private authService: AuthService) {
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
      role: ["", Validators.required],
      isGraduated: new FormControl(false)
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
    user.is_a_graduate = this.registerForm.value.isGraduated;

    this.authService.registerUser(user).subscribe({
      next: () => {
        Swal.fire({
          title: "Registrado",
          text: "Su usuario ha sido registrado con éxito, por favor, inicia sesión.",
          icon: "success"
        }).then(r => console.log(r));
      }, error: () => {
        Swal.fire({
          title: "Error",
          text: "Existe un error inesperado en el registro, por favor, revise sus datos e intente nuevamente.",
          icon: "error"
        })
      }
    });
  }

  returnToLogin() {
    this.returnLogin.emit(true);
  }

}
