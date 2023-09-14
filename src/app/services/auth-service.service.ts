// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = [
    { email: 'fernando@example.com', password: 'duno', role: 'admin' },
    { email: 'jesus@example.com', password: 'aguilera', role: 'cliente' }
  ];

  login(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  get currentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}

