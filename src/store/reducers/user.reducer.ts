// store/reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loginUser, logoutUser, loadUser } from '../actions/user.action';
import { User } from '../../models/user.model';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(loginUser, (state, { email, password }) => {
    // Aquí va la lógica para autenticar al usuario...
    const users = [
      { email: 'fernando@example.com', password: 'duno', role: 'admin' },
      { email: 'jesus@example.com', password: 'aguilera', role: 'cliente' }
    ];
    const user = users.find(user => user.email === email && user.password === password);
    return { ...state, user: user || null };
  }),
  on(logoutUser, (state) => ({ ...state, user: null })),
  on(loadUser, (state, { user }) => ({ ...state, user: user || null }))
);




