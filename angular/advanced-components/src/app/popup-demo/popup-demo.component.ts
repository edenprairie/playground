import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.css']
})
export class PopupDemoComponent implements OnInit {

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

  ngOnInit() {
  }

}
