import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjToArryPipe } from '../pipes/objToArray.pipe';


@NgModule({
  declarations: [
    FormComponent,
    ObjToArryPipe
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
