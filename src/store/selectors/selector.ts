import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/state.model';

export const selectRecetas = createSelector(
  (state: AppState) => state.recetas,
  (recetas) => recetas
);
