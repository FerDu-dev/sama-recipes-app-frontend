import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { agregarReceta, actualizarReceta, eliminarReceta } from '../../store/actions/action';
import { Receta } from '../../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  constructor(private store: Store) {}

  agregarReceta(receta: Receta) {
    this.store.dispatch(agregarReceta({ receta }));
  }

  editarReceta(receta: Receta) {
    this.store.dispatch(actualizarReceta({ receta }));
  }

  eliminarReceta(id: string) {
    this.store.dispatch(eliminarReceta({ id }));
  }
}
