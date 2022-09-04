import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {

  constructor()
  {

  }
  
  transform(value: number, ...args: unknown[]): number {
    return value*80;
  }

}
