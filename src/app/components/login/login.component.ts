import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authServices: AuthService, private toast: HotToastService, private router: Router) { }

  // Reactive driven form 
  email = new FormControl("", [
    Validators.required,
    Validators.email
  ])

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  login() {
    // this.authServices.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
    if (this.loginForm.invalid) {
      this.toast.info("Please enter valid email and password!");
    } else {
      this.authServices.loginUser(this.loginForm.value.email!, this.loginForm.value.password!).then((success) => {
        if (success) {
          this.router.navigate(['/mysnippet'])
          this.toast.success("Welcome Back!");
        } else {
          this.toast.error("Email or Password Wrong!");
        }
      })
        .catch(() => {
          this.toast.error("An unexpected error occurred. Please try again!");
        });
    }
  }

  reset() {
    this.loginForm.reset()
  }
}
