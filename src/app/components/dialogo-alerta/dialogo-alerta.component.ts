import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogo-alerta',
  template: `
    <h1 mat-dialog-title>Formulario incompleto</h1>
    <div mat-dialog-content>Por favor ingrese todos los datos</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Aceptar</button>
    </div>
  `,
})
export class DialogoAlertaComponent {}