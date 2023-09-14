// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RecetaDetalleComponent } from '../components/receta-detalle/receta-detalle.component';
import { RecetaTablaComponent } from '../components/receta-tabla/receta-tabla.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: RecetaTablaComponent },
  // Redirige a 'login' por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
