import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  Subscription,
  interval,
  of,
  from,
  fromEvent,
  combineLatest,
  forkJoin,
  throwError,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

import {
  catchError,
  concatMap,
  debounceTime,
  exhaustMap,
  filter,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  take,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  unsub$: Subscription;

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }

  ngOnInit(): void {
    // let subject = new Subject();

    // let subject = new BehaviorSubject(201);

    // let subject = new ReplaySubject(2);

    let subject = new AsyncSubject();

    this.unsub$ = subject.subscribe((data) => console.log('Subs 1 : ', data));

    subject.next(101);

    subject.next(102);

    subject.next(103);

    subject.subscribe((data) => console.log('Subs 2 : ', data));

    subject.next(104);

    subject.complete();

    // THROWING ERROR
    // source$ = throwError('Something went wrong');
    //   this.source$.pipe(catchError((err) => of(err))).subscribe({
    //     next : (data) => console.log('SUBS : ', data),
    //     error : (err) => console.log('ERROR', err),
    //     complete : () => console.log('COMPLETED')
    // });

    // PROMISE REJECTED - ERROR
    // const badPromise = () =>
    //   new Promise((resolve, reject) => reject('REJECTED'));

    // const source$ = from(badPromise());

    // source$.pipe(catchError((err) => of(err))).subscribe({
    //   next: (data) => console.log('SUBS : ', data),
    //   error: (err) => console.error('ERROR : ', err),
    //   complete: () => console.log('COMPLETED'),
    // });
  }

  // source$ = fromEvent(document, 'click');

  onSubscribe() {
    let source1$ = interval(1000).pipe(take(3));
    let source2$ = interval(1000).pipe(take(4));

    combineLatest([source1$, source2$]).subscribe(console.log);

    forkJoin({ source1$, source2$ }).subscribe(console.log);
  }

  // ngOnInit(): void {
  //   this.source$
  //     .pipe(exhaustMap((val) => interval(1000).pipe(take(4))))
  //     .subscribe(console.log);
  // }
  // ngAfterViewInit(): void {}

  // @ViewChild('btnGenerate') btn: ElementRef;
  // @ViewChild('inputText') inputText: ElementRef;

  // repos: { id: number; name: string }[];

  // ngAfterViewInit(): void {
  //   let inputSource$ = fromEvent(this.inputText.nativeElement, 'input');

  //   inputSource$
  //     .pipe(
  //       debounceTime(2000),
  //       map((event: any) => event.target.value),
  //       mergeMap((val) => {
  //         return ajax.getJSON(`https://api.github.com/users/${val}/repos`);
  //       })
  //       // mergeAll()
  //     )
  //     .subscribe((data: any[]) => {
  //       let transformedVal = data.map((val) => {
  //         let transformedValue = { id: val.id, name: val.name };
  //         return transformedValue;
  //       });
  //       this.repos = transformedVal;
  //     });

  // .subscribe((obs2) => {
  //   obs2.subscribe((data: any[]) => {
  //     let transformedVal = data.map((val) => {
  //       let transformedValue = { id: val.id, name: val.name };
  //       return transformedValue;
  //     });
  //     this.repos = transformedVal;
  //   });
  // });

  //   let eventSource$ = fromEvent(this.btn.nativeElement, 'click');

  //   this.source$.pipe(
  //     filter((val) => val % 2 == 0),
  //     take(10)
  //   );
  //   // .subscribe(console.log);

  //   // eventSource$.subscribe(console.log);
  // }

  // source$ = interval(1000);

  // // source$ = of('Hello', 'World');

  // // source$ = from(['Apple', 'Banana', 'Cat']);

  // // source$ = fromEvent(document, 'click');

  // ngOnInit(): void {
  //   // this.source$.pipe(take(5)).subscribe(console.log);
  //   // this.source$.pipe(takeWhile((val) => val <= 3)).subscribe(console.log);
  // }

  // unSub$: Subscription;

  // obs$ = new Observable((observer) => {
  //   console.log('Inside observable');

  //   setTimeout(() => {
  //     observer.next('First Package');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('Second Package');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Somethign went wrong'));
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.next('Third Package');
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 8000);
  // });

  // promise = new Promise((resolve, reject) => {
  //   console.log('Inside Promise');

  //   setTimeout(() => {
  //     resolve('Promise executed');
  //   }, 1000);
  // });

  // onSubscribe() {
  //   console.log('STARTED');
  //   this.unSub$ = this.obs$.subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     }, // data handler
  //     error: (err) => {
  //       console.log(err);
  //     }, // error handler
  //     complete: () => {
  //       console.log('COMPLETED');
  //     }, // completion
  //   });
  //   console.log('ENDED');
  // }

  // onUnsubscribe() {
  //   this.unSub$.unsubscribe();
  // }
}
