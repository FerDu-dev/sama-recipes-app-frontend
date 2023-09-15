import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/services/recetas.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoAlertaComponent } from '../dialogo-alerta/dialogo-alerta.component';
import { Receta } from 'src/models/receta.model';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-receta-formulario',
  templateUrl: './receta-formulario.component.html',
  styleUrls: ['./receta-formulario.component.css']
})
export class RecetaFormularioComponent implements OnInit {
  recetaForm: FormGroup;
  @Input() receta!: Receta;
  @Output() formSubmit = new EventEmitter<Receta>();
  @Output() formCancel = new EventEmitter<void>()

  constructor(private store: Store,private fb: FormBuilder, private recetasService: RecetasService, private dialog: MatDialog) {
    this.recetaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      ingredientes: ['', Validators.required],
      instrucciones: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  limpiarFormulario(): void {
    this.recetaForm.reset();
    Object.values(this.recetaForm.controls).forEach(control => {
      control.markAsUntouched();
    });
  }

  onSubmit(): void {
    if (this.recetaForm.valid) {
      const id = this.receta ? this.receta.id : uuidv4();
      const receta = new Receta(
        id,
        this.recetaForm.value.titulo,
        this.recetaForm.value.descripcion,
        this.recetaForm.value.ingredientes.split(','),
        this.recetaForm.value.instrucciones
      );
      this.formSubmit.emit(receta);
      this.limpiarFormulario();
    } else if (this.recetaForm.touched) {
      this.dialog.open(DialogoAlertaComponent);
    }
  }
  
  
  

  onCancel(): void {
    this.recetaForm.reset();
    Object.values(this.recetaForm.controls).forEach(control => {
      control.markAsUntouched();
    });
    this.formCancel.emit();
  }
}
