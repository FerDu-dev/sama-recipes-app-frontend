import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../store/actions/auth.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private store: Store) {}

  logout() {
<<<<<<< HEAD
    this.store.dispatch(AuthActions.logout());
=======
    this.authService.logoutUser();
    this.router.navigate(['/login']);
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
  }
}
