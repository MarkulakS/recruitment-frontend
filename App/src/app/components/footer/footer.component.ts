import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  caret: string = '^';
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFrame() {
    this.caret = (this.caret === '^') ? '⌄' : '^';
    this.isClicked = !this.isClicked;
  }

}
