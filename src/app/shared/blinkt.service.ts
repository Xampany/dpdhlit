import {Injectable} from '@angular/core';
import {Led} from '../led';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlinktService {

  private readonly URL = 'https://e058e2af50c2bd0a8119d48dffc38266.balena-devices.com/api';

  constructor(private readonly client: HttpClient) {
  }

  readLeds(): Observable<Led[]> {
    const colors$ = this.client.get<string[]>(`${this.URL}/colors`);

    const leds$: Observable<Led[]> = colors$.pipe(
      tap(
        colors => console.log(colors)
      ),
      map(
        (colors) => colors.map((color, index) => ({
            color,
            index
          })
        )
      )
    );

    return leds$;
  }
}
