import { createEffect, Actions, ofType, OnInitEffects } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { agregarReceta, actualizarReceta, eliminarReceta, cargarRecetas } from '../store/actions/action';
import { AppState } from '../models/state.model';
import { Receta } from 'src/models/receta.model';

@Injectable()
export class RecetasEffects implements OnInitEffects {
  guardarRecetas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(agregarReceta, actualizarReceta, eliminarReceta),
      tap(() => {
        this.store.select((state: any) => state.recetas as Receta[]).subscribe(recetas => {
          localStorage.setItem('recetas', JSON.stringify(recetas));
        });
      })
    ),
    { dispatch: false }
  );

  ngrxOnInitEffects() {
    const recetas = localStorage.getItem('recetas');
    return cargarRecetas({ recetas: JSON.parse(recetas || '[]') });
  }

  constructor(private actions$: Actions, private store: Store) {}
}


