import { createAction, props } from '@ngrx/store';
import { Receta } from '../../models/receta.model';

export const agregarReceta = createAction(
  '[Receta] Agregar Receta',
  props<{ receta: Receta }>()
);

export const actualizarReceta = createAction(
  '[Receta] Actualizar Receta',
  props<{ receta: Receta }>()
);

export const eliminarReceta = createAction(
  '[Receta] Eliminar Receta',
  props<{ id: string }>()
);

export const cargarRecetas = createAction(
  '[Receta] Cargar Recetas',
  props<{ recetas: Receta[] }>()
);