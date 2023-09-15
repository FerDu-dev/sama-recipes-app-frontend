// services/auth.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser, logoutUser } from '../../store/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store) {}

  loginUser(email: string, password: string) {
    this.store.dispatch(loginUser({ email, password }));
  }

  logoutUser() {
    this.store.dispatch(logoutUser());
  }
}


