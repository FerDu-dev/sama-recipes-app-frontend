// import { createEffect, Actions, ofType, OnInitEffects } from '@ngrx/effects';
// import { tap, map } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { agregarReceta, actualizarReceta, eliminarReceta, cargarRecetas } from '../store/actions/action';
// import { AppState } from 'src/models/state.model';
// import { Receta } from 'src/models/receta.model';
// import { HttpClient } from '@angular/common/http';
// import { switchMap } from 'rxjs/operators';

// @Injectable()
// export class RecetasApiEffects implements OnInitEffects {
//   guardarRecetas$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(agregarReceta, actualizarReceta, eliminarReceta),
//       switchMap(() => {
//         return this.store.select((state: any) => state.recetas as Receta[]).pipe(
//           switchMap(recetas => {
//             // Suponiendo que tienes un endpoint '/api/recetas' en tu servidor para guardar las recetas.
//             return this.http.post('/api/recetas', { recetas });
//           })
//         );
//       })
//     ),
//     { dispatch: false }
//   );

//   ngrxOnInitEffects(): Action {
//     // Suponiendo que tienes un endpoint '/api/recetas' en tu servidor para obtener las recetas.
//     return this.http.get('/api/recetas').pipe(
//       map((recetas: Receta[]) => cargarRecetas({ recetas })),
//       catchError(error => {
//         console.error('Error al cargar las recetas desde el servidor:', error);
//         return of(cargarRecetas({ recetas: [] }));
//       })
//     );
//   }

//   constructor(private actions$: Actions, private store: Store, private http: HttpClient) {}
// }
