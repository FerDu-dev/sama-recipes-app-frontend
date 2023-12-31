import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/services/recetas.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoAlertaComponent } from '../dialogo-alerta/dialogo-alerta.component';
import { Receta } from 'src/models/receta.model';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-receta-formulario',
  templateUrl: './receta-formulario.component.html',
  styleUrls: ['./receta-formulario.component.css']
})

export class RecetaFormularioComponent implements OnInit, OnChanges {
  recetaForm: FormGroup;
  @Input() receta!: Receta;
  @Output() formSubmit = new EventEmitter<Receta>();
  @Output() formCancel = new EventEmitter<void>()

  constructor(private store: Store,private fb: FormBuilder, private recetasService: RecetasService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.recetaForm = this.fb.group({
      titulo: [''],
      descripcion: [''],
      ingredientes: [''],
      instrucciones: ['']
    });
  }

  ngOnInit(): void {
    this.setFormValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['receta'] && changes['receta'].currentValue !== changes['receta'].previousValue) {
      this.setFormValues();
    }
  }

  setFormValues(): void {
    if (this.receta) {
      this.recetaForm.setValue({
        titulo: this.receta.titulo,
        descripcion: this.receta.descripcion,
        ingredientes: this.receta.ingredientes.join(','),
        instrucciones: this.receta.instrucciones
      });
    } else {
      this.recetaForm.reset();
    }
    Object.values(this.recetaForm.controls).forEach(control => {
      control.markAsUntouched();
    });
  }

  onSubmit(): void {
    if (this.validateForm()) {
      const id = this.receta ? this.receta.id : uuidv4();
      const receta = new Receta(
        id,
        this.recetaForm.value.titulo,
        this.recetaForm.value.descripcion,
        this.recetaForm.value.ingredientes.split(','),
        this.recetaForm.value.instrucciones
      );
      this.formSubmit.emit(receta);
      this.setFormValues();
    } else {
      Object.values(this.recetaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      this.snackBar.open('Por favor, rellena todos los campos', '', {
        duration: 2000,
      });
    }
  }

  validateForm(): boolean {
    return Object.values(this.recetaForm.controls).every(control => control.value);
  }

  onCancel(): void {
    this.setFormValues();
    this.formCancel.emit();
  }

  limpiarFormulario(): void {
    this.recetaForm.reset();
    Object.values(this.recetaForm.controls).forEach(control => {
      control.markAsUntouched();
    });
  }
}

