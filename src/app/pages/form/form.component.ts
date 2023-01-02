import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FormService } from '../services/form.service';

import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { FormInterface } from './interfaces/form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  loading$!: boolean;
  model = {
    email: '',
    firstName: '',
    lastName: '',
    telephone: '',
    about: ''
  }
  fields: FormInterface[] = [];
  requiredFields: string[] = [];
  errors: string[] = [];
  title!:string;
  description!:string;
  


  constructor(
    private formSvc: FormService,
    private readonly loadingSvc: LoadingService,
    private router: Router
  ) { 
    
    this.formSvc.getData()
      .pipe(
        tap( infoForm => this.addFields(infoForm))
      )
      .subscribe();
      this.loadingSvc.isLoading$.subscribe(res => res ? this.loading$ = false : this.loading$ = true)
  }  

  addFields(data): void {
    this.title = data.title;
    this.description = data.description;
    this.requiredFields = data.required

    for (let item in data.properties) {
      if(item) {
        this.fields.push(data.properties[item])
      }
    }
  }

  onSubmit({ value: formData } : NgForm):void {

    if(this.fieldValidation(formData)) {
      this.formSvc.saveForm(formData).subscribe(res => {
        if(res['required'].length == 0) {
          this.formSvc.changeDataFinish(res);
          this.router.navigate(['/form/congratulations'])
        } else {
          for(let item in res['properties']) {
            this.errors.push(res['properties'][item].error)
          }
        }
      })
    }




  }

  fieldValidation( data: NgForm ): boolean {
    this.errors = [];

    let email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(!email.test(data['email'])) {
      this.errors[0] = 'Invalid email'
    }
    if(data['telephone'].length != 10 ) {
      this.errors[3] = 'Phone number must be 10 digits long'
    }

    return this.errors.length != 0 ? false : true;
  }




}
