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
  resetDataStatus: boolean = true;

  constructor(private personalDataService: PersonalDataService) { }

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
    this.personalDataService.setDataStatus(this.enablePersonalData);
    this.toggleFrame();
  }

  resetData() {
    this.enablePersonalData = false;
    this.personalDataService.setDataStatus(this.enablePersonalData);
    this.personalDataService.setResetStatus(this.resetDataStatus);
    this.toggleFrame();
  }

}
