import { Receta } from '../models/receta.model';
import { User } from './user.model';

export interface AppState {
  recetas: Receta[];
<<<<<<< HEAD
  user: User | null;
=======
  user: User | undefined;
>>>>>>> d8b1c78b35efe94457861436d35e4190936c61d2
}