  import { createReducer, on } from '@ngrx/store';
  import { User } from '../../models/user.model';
  import * as AuthActions from '../actions/auth.action';

  export interface AuthState {
    user: User | null;
    error: any | null; 
  }

  export const initialState: AuthState = {
    user: null,
    error: null 
  };

  export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
    on(AuthActions.logout, state => ({ ...state, user: null }))
  );





