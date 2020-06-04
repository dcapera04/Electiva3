import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Electiva3';
  opened = true;
  public user$: Observable <any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }

  async onLogout() {
    try {
      const user = await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch (error) {
      console.log(error);
    }
  }


  }