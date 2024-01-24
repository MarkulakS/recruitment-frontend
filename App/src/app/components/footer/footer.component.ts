import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit  {

  rotationAngle: number = 45;
  mbValue: string = 'auto';
  isClicked: boolean = false;
  enablePersonalData: boolean = false;

  constructor(private personalData: PersonalDataService) { }

  ngOnInit(): void {
  }

  toggleFrame() {
    this.isClicked = !this.isClicked;
    if(this.isClicked) {
      this.rotationAngle = 225;
      this.mbValue = '3px';
    }else{
      this.rotationAngle = 45;
      this.mbValue = 'auto';
    }
  }

  showData() {
    this.enablePersonalData = true;
    this.personalData.setBoolean(this.enablePersonalData);
    this.toggleFrame();
  }

  resetData() {
    this.enablePersonalData = false;
    this.personalData.setBoolean(this.enablePersonalData);
    this.toggleFrame();
  }

}
