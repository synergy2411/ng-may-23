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

  contactNumber = 987654321;

  filteredStatus = '';

  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'planting', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'grocery', status: 'completed' },
  ];

  onAddItem() {
    this.todoCollection.push({ label: 'New Item', status: 'pending' });
  }
}

// ng g c demo/pipe-demo
