import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formRegister!: FormGroup;
  submittedData: any = null;

  constructor() {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [(Validators.required, Validators.email)]),
      phones: new FormArray([
        new FormControl('', [Validators.required, Validators.pattern('^01[0-9]{9}$')]),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchPassword]),
    });
  }
  get phones(): FormArray {
    return this.formRegister.get('phones') as FormArray;
  }
  addMobile() {
    this.phones.push(
      new FormControl('', [Validators.required, Validators.pattern('^01[0-9]{9}$')]),
    );
  }

  removeMobile(index: number) {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }
  onSubmit() {
    if (this.formRegister.valid) {
      this.submittedData = this.formRegister.value;
      console.log(this.submittedData);
    }
  }
  onReset() {
    this.formRegister.reset();
    this.submittedData = null;
  }
  matchPassword = (control: FormControl): { [key: string]: boolean } | null => {
    const password = control.parent?.get('password')?.value;
    return password === control.value ? null : { mismatch: true };
  };
}
