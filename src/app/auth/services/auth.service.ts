import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth, User } from 'firebase/app';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  public user$: Observable<any>;
  updateUserData: any;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState;
  }

  async loginGoogle() {
    try {
      const {user} = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    }
    catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    }
    catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User>{
    try {
      const {user} = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    }
    catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }
  }


}
