import { Component, Input, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isEnableData: boolean = false;
  mbValue: string = 'auto';

  constructor(private personalData: PersonalDataService) { }

  ngOnInit(): void {
    this.personalData.currentDataStatus.subscribe(
      value => {
        this.isEnableData = value;
        if(this.isEnableData) {
          this.mbValue = '0';
        } else {
          this.mbValue = 'auto';
        }
      }
    )
  }
}
