import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-demo-two',
  templateUrl: './demo-two.component.html',
  styleUrls: ['./demo-two.component.css'],
  providers: [CounterService],
})
export class DemoTwoComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  onIncreaseCounter() {
    this.counterService.counter++;
  }

  ngOnInit(): void {}
}
