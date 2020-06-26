import { Component, OnInit } from '@angular/core';
import {Led} from '../led';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit {

  leds: Led[] = [
    {
      index: 0,
      color: '#f00'
    },
    {
      index: 1,
      color: 'green'
    },
    {
      index: 2,
      color: 'blue'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
