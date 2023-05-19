import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter = 0;

  constructor() {}
}

// ng g s services/counter
