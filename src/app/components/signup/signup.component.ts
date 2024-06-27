import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authServices: AuthService, private router: Router, private toast: HotToastService) { }

  // Template driven form 
  register(regForm: NgForm) {
    if (regForm.invalid) {
      this.toast.info("Please enter valid email and password!");
    }
    else {
      this.authServices.registerUser(regForm.value.email!, regForm.value.password!).then((success) => {
        if (success) {
          this.toast.success("You are Sign in!");
          this.router.navigate(['/'])
        }
      })
        .catch(() => {
          this.toast.error("An unexpected error occurred. Please try again!");
        });
    }

  }
}
