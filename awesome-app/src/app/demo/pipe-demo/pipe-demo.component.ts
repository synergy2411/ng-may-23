import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent {
  asyncData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data arrived in App');
    }, 3000);
  });
}
