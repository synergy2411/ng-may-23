import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent {
  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 3000);
    setTimeout(() => {
      observer.complete();
    }, 4000);
  });

  onSubscribe() {
    console.log('STARTED');
    this.obs$.subscribe({
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
}
