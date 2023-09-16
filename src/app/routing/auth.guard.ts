import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private snackBar: MatSnackBar) {}
  
    canActivate(): boolean {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        // Si el usuario está autenticado, permite la navegación
        return true;
      } else {
        // Si el usuario no está autenticado, redirige al login y muestra un snackbar
        this.router.navigate(['/login']);
        this.snackBar.open('Por favor, inicia sesión con tu usuario', '', {
          duration: 6000,
        });
        return false;
      }
    }
  }
