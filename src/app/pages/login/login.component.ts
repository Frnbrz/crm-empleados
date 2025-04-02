import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Result } from '../../interfaces/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UsersService);
  router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        const result: Result = await this.userService.login(
          this.loginForm.getRawValue()
        );
        localStorage.setItem('token', result?.token!);
        this.router.navigate(['dashboard']);
      } catch (error) {
        if ((error as any)?.error?.error) {
          console.error('Login failed:', (error as any)?.error?.error);
        } else {
          console.error(error);
        }
      }
    } else {
      console.error('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }
}
