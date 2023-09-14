import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/models/receta.model';

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

  constructor(private fb: FormBuilder, private recetasService: RecetasService) {
    this.recetaForm = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      ingredientes: ['', Validators.required],
      instrucciones: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.recetaForm.valid) {
      const receta = new Receta(
        this.recetaForm.value.id,
        this.recetaForm.value.titulo,
        this.recetaForm.value.descripcion,
        this.recetaForm.value.ingredientes.split(','),
        this.recetaForm.value.instrucciones
      );
      this.formSubmit.emit(receta);
      this.recetaForm.reset(); // Limpia el formulario
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }
  
}
