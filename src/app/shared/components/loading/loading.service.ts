import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject  } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading$ = new Subject<boolean>();

  show(): void {
    this.isLoading$.next(true);
  }
  hide():void {
    this.isLoading$.next(false);
  }
}
