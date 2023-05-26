import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/model/todo';

@Injectable()
export class StudentService {
  studentData = { name: 'John Doe' };

  constructor(private http: HttpClient) {}

  getStudentData() {
    let studentData = { name: 'John Doe' };
    return studentData;
  }

  getStudentPromiseData() {
    return new Promise((resolve, reject) => {
      resolve('Data');
    });
  }

  getStudentFromAPI() {
    return this.http.get<Array<ITodo>>('fakeUrl', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
