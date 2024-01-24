import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private booleanSource = new BehaviorSubject<boolean>(false);
  currentBoolean = this.booleanSource.asObservable();

  constructor() { }

  setBoolean(newValue: boolean) {
    this.booleanSource.next(newValue);
  }
}
