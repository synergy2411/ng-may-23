import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAction from '../../store/actions/root.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.css'],
})
export class CounterResultComponent implements OnInit {
  result: Array<number>;
  counter: number;

  constructor(private store: Store<{ ctr: { counter: number; result: [] } }>) {}

  ngOnInit(): void {
    this.store.select('ctr').subscribe((data) => {
      this.result = data.result;
      this.counter = data.counter;
    });
  }

  onStoreResult() {
    this.store.dispatch(new fromAction.StoreResult(this.counter));
    // this.store.select('ctr').subscribe((data) => {
    // });
  }

  onItemSel(index: number) {
    this.store.dispatch(new fromAction.DeleteResult(index));
  }
}
