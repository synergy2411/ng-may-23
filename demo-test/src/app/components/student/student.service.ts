import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  studentData = { name: 'John Doe' };

  getStudentData() {
    let studentData = { name: 'John Doe' };
    return studentData;
  }
}
