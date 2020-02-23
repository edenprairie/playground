import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('On Init')
  }

  ngOnDestroy() {
    console.log('On Destory')
  }

}
