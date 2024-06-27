import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?: string;

  constructor(private router: Router, private toast: HotToastService) {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      } else {
        this.uid = undefined;
      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false
  }

  getUid() {
    return this.uid;
  }

  async registerUser(email: string, password: string) {

    const auth = getAuth();
    try {
      this.toast.loading("Loading...", {
        duration: 1000,
      })
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async loginUser(email: string, password: string) {
    const auth = getAuth();
    try {
      this.toast.loading("Loading...", {
        duration: 1000,
      });
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  logoutUser() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['/login'])
    }).catch((error) => {
      alert("Something went Wrong! Try Again")
    });
  }
}
