import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>404 Page Not Found</h1>
    <button mat-raised-button color="primary" (click)="goToLogin()">Regresar al login</button>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 50px;
    }
    button {
      display: block;
      width: 200px;
      height: 50px;
      margin: 50px auto;
    }
  `]
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
