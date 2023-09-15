<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
=======
// services/auth.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser, logoutUser } from '../../store/actions/user.action';
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store) {}

<<<<<<< HEAD
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
=======
  loginUser(email: string, password: string) {
    this.store.dispatch(loginUser({ email, password }));
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
  }

  logoutUser() {
    this.store.dispatch(logoutUser());
  }
}


