import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { loginUser, loadUser } from '../store/actions/user.action';
import { User } from '../models/user.model';

@Injectable()
export class UserEffects implements OnInitEffects {
  guardarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      tap(() => {
        this.store.select((state: any) => state.user as User).subscribe(user => {
          localStorage.setItem('user', JSON.stringify(user));
          console.log('Usuario guardado en el LocalStorage:', user);
        });
      })
    ),
    { dispatch: false }
  );

  ngrxOnInitEffects() {
    const user = localStorage.getItem('user');
    return loadUser({ user: JSON.parse(user || 'null') });
  }

  constructor(private actions$: Actions, private store: Store) {}
}
