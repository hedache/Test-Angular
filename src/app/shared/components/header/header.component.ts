import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>Test</span>
      <mat-icon class="menuIcon">assignment</mat-icon>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
