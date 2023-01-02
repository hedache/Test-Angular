import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongratulationsRoutingModule } from './congratulations-routing.module';
import { CongratulationsComponent } from './congratulations.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CongratulationsComponent
  ],
  imports: [
    CommonModule,
    CongratulationsRoutingModule,
    MaterialModule
  ]
})
export class CongratulationsModule { }
