import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragoes';

  public isAuthenticated: boolean
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuthenticated = this.authenticationService.getAutenticacao();
        if (!this.isAuthenticated && !/^\/login/.test(event.url)) {
          this.router.navigateByUrl('/login');
        }
      }
    })
  }
}
