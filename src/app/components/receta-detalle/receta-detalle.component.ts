import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Receta } from 'src/models/receta.model';

@Component({
  selector: 'app-receta-dialogo',
  template: `
   <mat-dialog-content>Receta Sama</mat-dialog-content>
    <div style="color: lightgray; margin-left: 15px"><small>Título</small></div>
    <h2 mat-dialog-title style="color: white;">{{ receta.titulo }}</h2>
    <div style="color: lightgray;margin-left: 15px"><small>Descripción</small></div>
    <p mat-body-1 style="color: white;margin-left: 15px">{{ receta.descripcion }}</p>
    <div style="color: lightgray; margin-left: 15px"><small>Ingredientes</small></div>
    <ul>
      <li mat-body-1 style="color: white;" *ngFor="let ingrediente of receta.ingredientes">{{ ingrediente }}</li>
    </ul>
    <div style="color: lightgray;margin-left: 15px"><small>Instrucciones</small></div>
    <p mat-body-1 style="color: white;margin-left: 15px">{{ receta.instrucciones }}</p>
    <mat-dialog-actions>
      <button mat-button  (click)="dialogRef.close(false)">Ok</button>
    </mat-dialog-actions>
  `,
})
export class RecetaDetalleComponent {
  constructor(
    public dialogRef: MatDialogRef<RecetaDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public receta: Receta
  ) {}
}

