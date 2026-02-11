import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formRegister!: FormGroup;
  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [(Validators.required, Validators.email)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit() {
    console.log(this.formRegister.value);
  }
  onReset() {
    this.formRegister.reset();
  }
}
