<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../store/actions/auth.action';
=======
// components/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/store/selectors/user.selector';
import { take } from 'rxjs/operators';
import { AppState } from 'src/models/state.model';
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

<<<<<<< HEAD
  constructor(private store: Store, private router: Router) { }

  login() {
    this.store.dispatch(AuthActions.login({ email: this.email, password: this.password }));
=======
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  login() {
    this.authService.loginUser(this.email, this.password);
    this.store.select(selectUser).pipe(take(1)).subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      } else {
        console.log("error de autentificacion")
      }
    });
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
  }
}


<<<<<<< HEAD
=======

>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
