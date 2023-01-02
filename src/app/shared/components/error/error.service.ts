import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ErrorComponent } from './error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  show(): void {
    this.openDialog();
  }

  constructor( private dialog: MatDialog ) {
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      data: `Inténtalo nuevamente`,
    })

    dialogRef.afterClosed().subscribe(() => {
      location.reload();
    });
  }
}
