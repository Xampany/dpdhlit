import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  color = 'red';

  readonly min = 3;

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const control = this.fb.control(
      this.color,
      [Validators.required, Validators.minLength(this.min)]
    );

    this.form = this.fb.group({
      color: control
    });

    control.statusChanges
      .pipe(tap(val => console.log(val)))
      .subscribe();

    this.form.valueChanges
      .pipe(tap(val => console.log(val)))
      .subscribe();

  }

  updateColor(data: any): void {
    console.log('submit', this.color);
  }

}
