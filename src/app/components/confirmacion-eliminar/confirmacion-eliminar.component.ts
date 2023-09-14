import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-eliminar',
  template: `
    <h2 mat-dialog-title>Eliminar receta</h2>
    <mat-dialog-content>¿Estás seguro de que deseas eliminar la receta "{{ data.titulo }}"?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="dialogRef.close(false)">No</button>
      <button mat-button color="warn" (click)="dialogRef.close(true)">Sí</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmacionEliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmacionEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string }
  ) {}
}
