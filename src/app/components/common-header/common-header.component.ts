import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {
    coins: number = 12;

  constructor() { }

  ngOnInit() {
  }

}
