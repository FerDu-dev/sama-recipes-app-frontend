// store/actions/user.action.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loginUser = createAction(
  '[User] Login User',
  props<{ email: string; password: string }>()
);

export const logoutUser = createAction(
  '[User] Logout User'
);

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: User }>()
);
