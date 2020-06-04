import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
    constructor(private authSvc: AuthService, private router: Router) { }

    async onGoogleLogin(){
      try{
        const user = await this.authSvc.loginGoogle();
        if (user){
          this.checkUserIsVerified(user);
        }
      }
      catch(error){
      console.log(error);
      }

    }

    async onLogin(){
      const {email, password} = this.loginForm.value;
      try{
        const user = await this.authSvc.login(email, password);
        this.checkUserIsVerified(user);
      }catch (error){
        console.log(error)
      }
    }

    private checkUserIsVerified(user: User){
      if(user && user.emailVerified){
        this.router.navigate(['/home']);
      }else if(user){
        this.router.navigate(['/verification-email']);
      }else{
        this.router.navigate(['/aliado']);
      }
    }
}




