import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isResetEnable: boolean = false;
  option: string = 'option-1';
  result: Array<string> = [];

  private jsonData = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Nibh mauris cursus mattis molestie. Amet porttitor eget dolor morbi non arcu. Varius morbi enim nunc faucibus a pellentesque sit amet. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.'},
    { text: 'Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution. So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new. ' },
    { text: 'Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. An course regard to up he hardly. View four has said does men saw find dear shy.' },
    { text: 'Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. ' },
    { text: 'Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private.' },
    { text: 'Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise.' }
  ]

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('jsondata')) {
      localStorage.setItem('jsondata', JSON.stringify(this.jsonData));
    }
    if(localStorage.getItem('result')) {
      this.result = JSON.parse(localStorage.getItem('result') || '[]');
    }
    this.personalDataService.currentResetStatus.subscribe(
      value => {
        if(value === true) {
          this.resetStorage();
        }
      }
    )
    this.changeElement();
  }

  resetStorage() {
    localStorage.setItem('jsondata', JSON.stringify(this.jsonData));
    this.option = "option-1";
    this.changeElement();
  }

  addElement() {
    let localData = JSON.parse(localStorage.getItem('jsondata') || '[]');
    let localResult = JSON.parse(localStorage.getItem('result') || '[]');

    if (!Array.isArray(localResult)) {
      localResult = [localResult];
    }

    const newEl = (el: string) => {
      localResult.push(el);
      setTimeout(() => {
        this.result = localResult;
        localStorage.setItem('result', JSON.stringify(localResult));
      }, 200);
    }

    if(localData.length > 0) {
      let isDuplicate;
      if(this.option === 'option-1') {
        isDuplicate = localResult.includes(localData[0].text);
        if (isDuplicate) {
          alert('Dana wartość jest już w użyciu!');
        }else {
          newEl(localData[0].text);
        }
      }else if(this.option === 'option-2') {
        isDuplicate = localResult.includes(localData[1].text);
        if (isDuplicate) {
          alert('Dana wartość jest już w użyciu!');
        }else {
          newEl(localData[1].text);
        }
      }else if(this.option === 'option-3') {
        let random = Math.floor(Math.random() * localData.length);
        let isDuplicate = localResult.includes(localData[random].text);
        console.log(isDuplicate);
        if (isDuplicate) {
          localData.splice(random, 1);
          localStorage.setItem('jsondata', JSON.stringify(localData));
          this.addElement();
        } else {
          newEl(localData[random].text);
        }
      }
    }else {
      alert('Nie ma więcej tekstu. Zresetuj ustawienia.');
    }
  }

  changeElement() {
    let localData = JSON.parse(localStorage.getItem('jsondata') || '[]');

    if(this.option === 'option-1') {
      localStorage.removeItem('result');
      this.result = [];

        if(localData.length > 0) {
          setTimeout(() => {
            localStorage.setItem('result', JSON.stringify(localData[0].text));
            let localResult = JSON.parse(localStorage.getItem('result') || '[]');
            this.result[0] = localResult;
          }, 200);
        }else{
          alert('Nie ma więcej tekstu. Zresetuj ustawienia.');
        }
    }
    else if(this.option === 'option-2') {
      localStorage.removeItem('result');
      this.result = [];

        if(localData.length > 0) {
          setTimeout(() => {
            localStorage.setItem('result', JSON.stringify(localData[1].text));
            let localResult = JSON.parse(localStorage.getItem('result') || '[]');
            this.result[0] = localResult;
        }, 200);
        }else{
          alert('Nie ma więcej tekstu. Zresetuj ustawienia.');
        }
    }
    else if(this.option === 'option-3') {
      localStorage.removeItem('result');
      this.result = [];

      let random = Math.floor(Math.random() * localData.length);
        if(localData.length > 0) {
          setTimeout(() => {
            localStorage.setItem('result', JSON.stringify(localData[random].text));
            let localResult = JSON.parse(localStorage.getItem('result') || '[]');
            this.result[0] = localResult;
        }, 200);
        }else{
          alert('Nie ma więcej tekstu. Zresetuj ustawienia.');
        }
    }
  }
}
