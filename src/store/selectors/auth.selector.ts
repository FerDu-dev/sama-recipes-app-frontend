import { AppState } from "src/models/state.model";
import { createSelector } from "@ngrx/store";

export const selectAuthError = createSelector(
    (state: AppState) => state.user ? state.user.error : null,
    (error) => error
  );