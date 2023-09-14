import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/models/receta.model';
import { ConfirmacionEliminarComponent } from '../confirmacion-eliminar/confirmacion-eliminar.component';
import { RecetaFormularioComponent } from '../receta-formulario/receta-formulario.component';
import { AppState } from 'src/models/state.model';

@Component({
  selector: 'app-receta-tabla',
  templateUrl: './receta-tabla.component.html',
  styleUrls: ['./receta-tabla.component.css']
})
export class RecetaTablaComponent implements OnInit {
  recetas$: Observable<Receta[]>;
  @ViewChild('drawer') drawer!: MatDrawer;
  editar: boolean = false;
  recetaSeleccionada: Receta | null = null;

  constructor(private store: Store<AppState>, private dialog: MatDialog, private recetasService: RecetasService) {
    this.recetas$ = this.store.select(state => state.recetas);
  }

  ngOnInit(): void {}

  verReceta(id: string): void {
    // Aquí puedes definir la lógica para visualizar una receta
  }

  agregarReceta(receta: Receta): void {
    this.recetasService.agregarReceta(receta);
  }

  abrirDrawer(): void {
    this.drawer.open();
  }
  

  editarReceta(id: string): void {
    this.editar = true;
    this.recetas$.subscribe(recetas => {
      this.recetaSeleccionada = recetas.find((receta: Receta) => receta.id === id) || null;
    });
    this.drawer.open();
  }

  eliminarReceta(id: string): void {
    const dialogRef = this.dialog.open(ConfirmacionEliminarComponent, {
      data: { titulo: '¿Estás seguro de que deseas eliminar esta receta?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recetasService.eliminarReceta(id);
      }
    });
  }
}
