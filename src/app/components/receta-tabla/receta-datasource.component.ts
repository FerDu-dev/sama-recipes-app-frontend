import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Receta } from 'src/models/receta.model';
import { AppState } from 'src/models/state.model';
import { Store } from '@ngrx/store';

export class RecetaDataSource extends DataSource<Receta> {
    private recetasSubject = new BehaviorSubject<Receta[]>([]);
    data: Receta[] = [];
  
    constructor(private store: Store<AppState>) {
      super();
      this.store.select(state => state.recetas).subscribe(recetas => {
        this.data = recetas;
        this.recetasSubject.next(recetas);
      });
    }
  
    connect(): Observable<Receta[]> {
      return this.recetasSubject.asObservable();
    }
  
    disconnect() {
      this.recetasSubject.complete();
    }
  }
