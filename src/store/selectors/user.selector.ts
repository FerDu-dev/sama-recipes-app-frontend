// store/selectors/user.selector.ts
import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/state.model';

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user) => user
);
