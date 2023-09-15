import { Receta } from '../models/receta.model';
import { User } from './user.model';

export interface AppState {
  recetas: Receta[];
  user: User | null;
}