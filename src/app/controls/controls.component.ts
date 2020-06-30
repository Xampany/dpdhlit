import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pi-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Output()
  reload = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleReload(): void {
    this.reload.emit();
  }
}
