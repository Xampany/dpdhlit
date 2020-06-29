import { Pipe, PipeTransform } from '@angular/core';

import * as tinycolor from 'tinycolor2';

@Pipe({
  name: 'piColor'
})
export class PiColorPipe implements PipeTransform {

  transform(value: string, format: 'rgb' | 'prgb' | 'hex' | 'hex6' | 'hex3' | 'hex4' | 'hex8' | 'name' | 'hsl' | 'hsv'): string {
    return tinycolor(value).toString(format);
  }

}
