import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = [
    { email: 'fernando@example.com', password: 'duno', role: 'admin' },
    { email: 'jesus@example.com', password: 'aguilera', role: 'cliente' }
  ];

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

  logout() {
    localStorage.removeItem('currentUser');
  }

  get currentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}


