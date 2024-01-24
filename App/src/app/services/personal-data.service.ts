import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private personalDataSource = new BehaviorSubject<boolean>(false);
  currentDataStatus = this.personalDataSource.asObservable();

  private resetDataSource = new BehaviorSubject<boolean>(false);
  currentResetStatus = this.resetDataSource.asObservable();

  constructor() { }

  setDataStatus(newValue: boolean) {
    this.personalDataSource.next(newValue);
  }

  setResetStatus(newValue: boolean) {
    this.resetDataSource.next(newValue);
  }
  
}
