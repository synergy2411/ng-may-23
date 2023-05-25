import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit {
  studentData: { name: string };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentData = this.studentService.studentData;
  }

  totalMarks(marks) {
    let totalMarks = 0;
    for (let mark of marks) {
      totalMarks += mark;
    }
    return totalMarks;
  }

  averageMarks(marks) {
    let avgMarks = this.totalMarks(marks) / marks.length;
    return avgMarks;
  }

  calculateResult() {
    if (this.averageMarks([40, 30]) < 40) {
      return 'FAIL';
    } else {
      return 'PASS';
    }
  }
}
