import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string;
  constructor(private popup: Popup) { }

  ngOnInit() {
    this.title = 'Works';
  }

  ClickButton() {
    this.popup.options = {
      color:"red";
    }
    this.popup.show();
  }
}
