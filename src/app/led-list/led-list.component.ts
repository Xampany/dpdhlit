import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Led} from '../shared/led';
import {BlinktService} from '../shared/blinkt.service';
import {Observable, Subscription, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit, OnDestroy {

  leds: Led[];

  leds$: Observable<Led[]>;

  private sub: Subscription;

  private readonly destroy$ = new EventEmitter<void>();

  constructor(private blinkt: BlinktService) { }

  ngOnInit(): void {
    timer(1000, 2000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
      {
        next: value => console.log(value)
      }
    );

    console.log(this.blinkt);
    this.leds$ = this.blinkt.readLeds();

    this.loadLeds();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.destroy$.emit();
  }

  loadLeds(): void {
    this.blinkt.readLeds()
      .subscribe({
        next: leds => this.leds = leds,
        error: err => console.warn(err),
        complete: () => console.log('habe fertig')
      });
  }

}
