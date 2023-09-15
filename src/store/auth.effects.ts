import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as AuthActions from '../store/actions/auth.action'
import { AuthService } from 'src/app/services/auth-service.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(action =>
      this.authService.login(action.email, action.password).pipe(
        map(user => {
          this.router.navigate(['/home']); // Añade esta línea
          return AuthActions.loginSuccess({ user: { ...user, error: null } });
        }),
        catchError(error => of(AuthActions.loginFailure({ error })))
      )
    )
  )
);

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.authService.logout();
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}

