import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { recetaReducer } from 'src/store/reducers/reducer';
import { AppRoutingModule } from './routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RecetaDetalleComponent } from './components/receta-detalle/receta-detalle.component';
import { RecetaTablaComponent } from './components/receta-tabla/receta-tabla.component';
import { RecetaFormularioComponent } from './components/receta-formulario/receta-formulario.component';
import { ConfirmacionEliminarComponent } from './components/confirmacion-eliminar/confirmacion-eliminar.component';
import { DialogoAlertaComponent } from './components/dialogo-alerta/dialogo-alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecetaDetalleComponent,
    RecetaTablaComponent,
    RecetaFormularioComponent,
    ConfirmacionEliminarComponent,
    DialogoAlertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ recetas: recetaReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

