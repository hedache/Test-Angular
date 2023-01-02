import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-congratulations',
  template: `
  <div class="container">
      <h1 class="title">{{ title }}</h1>
      <p class="content">
          {{ description }}
      </p>
      <button mat-raised-button color="primary" type="submit" routerLink="/form">
        <mat-icon class="menuIcon">keyboard_backspace</mat-icon>
        Back
    </button>
    </div>
  `,
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  title!: string;
  description!: string;


  constructor( 
    private readonly formSvc: FormService
   ) {
    this.formSvc.finish.pipe(
      tap(res => {
        this.title = res['title']
        this.description = res['description']
      })
    ).subscribe();
    }

  ngOnInit(): void {
  }

}
