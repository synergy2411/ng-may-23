import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/model/user';
// import { USER_DATA } from 'src/model/mocks';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<IUser[]> {
    // return USER_DATA;
    return this.http.get<IUser[]>(
      `https://landis-gyr-may-23-default-rtdb.firebaseio.com/userdata.json`
    );
  }
}
