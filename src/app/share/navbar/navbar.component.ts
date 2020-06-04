import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
public isLogged  = false;

 public user$: Observable <any> = this.authSvc.afAuth.user;


  constructor(public authSvc: AuthService, private router: Router) { }

  async ngOnInit() {  }

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch (error){console.log(error); }
  }
  }