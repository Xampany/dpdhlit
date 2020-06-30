import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Led} from '../shared/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  @Input()
  led: Led;

  @Output()
  ledChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleClick(ev: MouseEvent) {
    console.log('I was clicked', ev.ctrlKey);
    if (ev.ctrlKey) {
      this.ledChange.emit(this.led.index);
    }
  }

}
