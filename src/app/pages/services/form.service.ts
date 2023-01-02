import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormInterface } from '../form/interfaces/form.interface';
import { BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiURL = '/server/';
  finish = new BehaviorSubject<Object>("");


  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get(`${this.apiURL}fieldsForm`)
  }

  saveForm( form: FormInterface ) {
    return this.http.post(`${this.apiURL}saveForm`, form)
  }

  changeDataFinish( data: Object ) {
    this.finish.next(data);
  }

}
