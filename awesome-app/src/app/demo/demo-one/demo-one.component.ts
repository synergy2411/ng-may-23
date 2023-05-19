import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css'],
})
export class DemoOneComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  onIncreaseCounter() {
    this.counterService.counter++;
  }

  ngOnInit(): void {}
}
