import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/models/receta.model';
import { ConfirmacionEliminarComponent } from '../confirmacion-eliminar/confirmacion-eliminar.component';
import { RecetaFormularioComponent } from '../receta-formulario/receta-formulario.component';
import { AppState } from 'src/models/state.model';
import { RecetaDetalleComponent } from '../receta-detalle/receta-detalle.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-receta-tabla',
  templateUrl: './receta-tabla.component.html',
  styleUrls: ['./receta-tabla.component.css']
})
export class RecetaTablaComponent implements OnInit {
  recetas$: Observable<Receta[]>;
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(RecetaFormularioComponent) formularioComponent!: RecetaFormularioComponent;
  editar: boolean = false;
  recetaSeleccionada: Receta | null = null;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar,private dialog: MatDialog, private recetasService: RecetasService) {
    this.recetas$ = this.store.select(state => state.recetas);
  }

  ngOnInit(): void {}

  verReceta(id: string): void {
    this.recetas$.subscribe(recetas => {
      const receta = recetas.find((receta: Receta) => receta.id === id);
      if (receta) {
        this.dialog.open(RecetaDetalleComponent, {
          width: '500px',
          height: '480px',
          data: receta,
        });
      }
    });
  }

  agregarReceta(receta: Receta): void {
    this.recetasService.agregarReceta(receta);
    console.log(receta);
    this.snackBar.open('Receta creada exitosamente', '', {
      duration: 2000,  
    });
  }

  abrirDrawer(): void {
    this.editar = false;
    this.recetaSeleccionada = null;
    this.drawer.open();
  }
  

  editarReceta(id: string): void {
    this.editar = true;
    this.recetas$.pipe(take(1)).subscribe(recetas => {
      this.recetaSeleccionada = recetas.find((receta: Receta) => receta.id === id) || null;
      if (!this.drawer.opened) {
        this.drawer.open();
      }
    });
  }

  eliminarReceta(id: string): void {
    const dialogRef = this.dialog.open(ConfirmacionEliminarComponent, {
      width: '500px',
      data: { titulo: '¿Estás seguro de que deseas eliminar esta receta?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recetasService.eliminarReceta(id);
        this.snackBar.open('Receta eliminada exitosamente', '', {
          duration: 2000,
        });
      }
    });
  }

  handleFormSubmit(receta: Receta): void {
    if (this.editar) {
      this.recetasService.actualizarReceta(receta);
    } else {
      this.agregarReceta(receta);
    }
    this.formularioComponent.limpiarFormulario();
  }
}
