import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const toast = inject(HotToastService);
  const authServices = inject(AuthService);
  if (authServices.isAuthenticated()) {
    return true
  }
  else {
    toast.warning("You have to first Loggin!")
    router.navigate(['/login'])
    return false;
  }
};
