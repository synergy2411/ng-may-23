import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, countryName?: string): string {
    switch (countryName) {
      case 'USA':
        return '+1 ' + value;
      case 'EUR':
        return '+21 ' + value;
      case 'AUS':
        return '+31 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
