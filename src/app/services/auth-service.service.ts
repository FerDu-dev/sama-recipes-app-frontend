import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = [
    { email: 'fernando@example.com', password: 'duno', role:"admin" },
    { email: 'jesus@example.com', password: 'aguilera', role:"client" }
  ];
  constructor(private store: Store) {}

  login(email: string, password: string) {
    return of(this.users.find(user => user.email === email && user.password === password)).pipe(
      delay(2000), // Simula una llamada a la API
      map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        } else {
          throw new Error('Usuario no registrado');
        }
      })
    );
  }

  logoutUser() {
    delay(2000), 
    localStorage.removeItem('currentUser');
    // this.store.dispatch(AuthActions.logout());
  }
}


