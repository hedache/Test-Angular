import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  template: `
  <h1 mat-dialog-title>¡Lo sentimos!</h1>
  <div mat-dialog-content>
      <p>{{mensaje}}</p>
  </div>
  <div mat-dialog-actions>
      <button mat-button (click)="reaload()">
          Recargar
          <mat-icon class="menuIcon">refresh</mat-icon>
      </button>
  </div>
  `
})
export class ErrorComponent {

  constructor( 
    public dialogo: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string
    
  ) { }
  reaload(): void {
    this.dialogo.close(true);
  }

  

}
