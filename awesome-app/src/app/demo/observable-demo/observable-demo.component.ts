import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  // source$ = interval(1000);

  // source$ = of('Hello', 'World');

  // source$ = from(['Apple', 'Banana', 'Cat']);

  source$ = fromEvent(document, 'click');

  ngOnInit(): void {
    this.source$.subscribe(console.log);
  }

  unSub$: Subscription;

  obs$ = new Observable((observer) => {
    console.log('Inside observable');

    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Somethign went wrong'));
    }, 5000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 8000);
  });

  promise = new Promise((resolve, reject) => {
    console.log('Inside Promise');

    setTimeout(() => {
      resolve('Promise executed');
    }, 1000);
  });

  onSubscribe() {
    console.log('STARTED');
    this.unSub$ = this.obs$.subscribe({
      next: (data) => {
        console.log(data);
      }, // data handler
      error: (err) => {
        console.log(err);
      }, // error handler
      complete: () => {
        console.log('COMPLETED');
      }, // completion
    });
    console.log('ENDED');
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
}
