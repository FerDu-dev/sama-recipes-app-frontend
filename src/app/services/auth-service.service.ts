import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';



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
      delay(2000), // Simular una llamada a la API
      map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        } else {
          console.log("user cant login")
          throw new Error('Usuario no registrado');
        }
      })
    );
  }

  logoutUser() {
    delay(2000), 
    localStorage.removeItem('currentUser');
  }
}


