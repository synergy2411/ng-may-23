import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from '../../store/actions/root.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  // counter: number;
  counter$: Observable<{ counter: number }>;
  constructor(private store: Store<{ ctr: { counter: number } }>) {}

  ngOnInit(): void {
    // this.store.select('ctr').subscribe((data) => (this.counter = data.counter));
    this.counter$ = this.store.select('ctr');
  }

  onIncrease() {
    this.store.dispatch({ type: fromActions.INCREMENT });
  }

  onDecrease() {
    this.store.dispatch({ type: fromActions.DECREMENT });
  }

  onAddCounter(val: number) {
    this.store.dispatch(new fromActions.AddCounter(10));
  }

  onSubtractCounter(val: number) {
    this.store.dispatch(new fromActions.SubtractCounter(val));
  }
}
