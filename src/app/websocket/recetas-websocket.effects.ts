// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { tap, switchMap, withLatestFrom } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { agregarReceta, actualizarReceta, eliminarReceta, cargarRecetas } from '../store/actions/action';
// import { AppState } from '../models/state.model';
// import { Receta } from 'src/models/receta.model';
// import { WebSocketService } from '../services/web-socket.service';

// @Injectable()
// export class RecetasEffects {
//   guardarRecetas$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(agregarReceta, actualizarReceta, eliminarReceta),
//       withLatestFrom(this.store.select((state: any) => state.recetas as Receta[])),
//       tap(([action, recetas]) => {
//         
//         // guardamos las recetas y las enviamos al servidor a través del WebSocket.
//         this.webSocketService.send(recetas);
//       })
//     ),
//     { dispatch: false }
//   );

// actualizarReceta$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(actualizarReceta),
//   tap((action) => {
//     // Enviamos la receta actualizada al servidor a través del WebSocket.
//     this.webSocketService.send(action.receta);
//   })
// ),
// { dispatch: false }
// );

//   constructor(private actions$: Actions, private store: Store, private webSocketService: WebSocketService) {
//     // conectamos al servidor WebSocket.
//     this.webSocketService.connect('ws://servidor-websocket.com');

//     // Escuchamos los mensajes que vienen del servidor.
//     this.webSocketService.getMessages().subscribe(message => {
//       // despachar acciones basadas en los mensajes que recibo del servidor.
//     });
//   }
// }
