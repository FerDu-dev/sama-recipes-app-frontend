import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../store/actions/auth.action';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private store: Store, 
    private authService: AuthService,
    private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
    this.authService.logoutUser();

  }
}
