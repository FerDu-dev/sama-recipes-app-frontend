<<<<<<< HEAD
=======
// store/selectors/user.selector.ts
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/state.model';

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user) => user
);
