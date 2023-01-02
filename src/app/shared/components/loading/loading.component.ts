import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: 
  `
  <div class="overlay" *ngIf="isLoading$ | async">
    <div>
      <div class="loader"></div>
    </div>
  </div>
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  isLoading$ = this.loadingSvc.isLoading$;

  constructor( private readonly loadingSvc: LoadingService ) { }

}
