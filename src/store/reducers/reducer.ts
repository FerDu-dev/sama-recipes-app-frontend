import { createReducer, on } from '@ngrx/store';
import { agregarReceta, actualizarReceta, eliminarReceta, cargarRecetas } from '../actions/action'
import { Receta } from '../../models/receta.model';

export const initialState: ReadonlyArray<Receta> = [];

export const recetaReducer = createReducer(
  initialState,
  on(agregarReceta, (state, { receta }) => [...state, receta]),
  on(actualizarReceta, (state, { receta }) => state.map(item => item.id === receta.id ? receta : item)),
  on(eliminarReceta, (state, { id }) => state.filter(item => item.id !== id)),
  on(cargarRecetas, (state, { recetas }) => [...recetas])
)