import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-narvigator',
  templateUrl: './narvigator.component.html',
  styleUrls: ['./narvigator.component.css']
})
export class NarvigatorComponent implements OnInit {

  public loggedIn: boolean;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }


  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
