import {
  ComponentFixture,
  TestBed,
  flush,
  waitForAsync,
} from '@angular/core/testing';
import { StudentService } from './student.service';
import { StudentComponent } from './student.component';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ITodo } from 'src/app/model/todo';

describe('Student Service', () => {
  let service: StudentService;
  let fixture: ComponentFixture<StudentComponent>;
  let controller: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [StudentService],
      imports: [HttpClientModule, HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(StudentService);
    fixture = TestBed.createComponent(StudentComponent);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should make remote server call in fake environemnt', () => {
    let mockData: ITodo[] = [{ id: 'e001', label: 'Shopping' }];

    service.getStudentFromAPI().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const request = controller.expectOne('fakeUrl');

    expect(request.cancelled).toBeFalsy();

    expect(request.request.responseType).toBe('json');

    request.flush(mockData);

    controller.verify();
  });

  it('should test the returned promise', waitForAsync(() => {
    spyOn(service, 'getStudentPromiseData').and.returnValue(
      Promise.resolve('Mock Data')
    );

    // service.getStudentPromiseData().then((data) => {
    //   expect(data).toBe('Mock Data');
    // });

    let resultData = '';

    service.getStudentPromiseData().then((data: string) => (resultData = data));

    fixture.whenStable().then(() => {
      expect(resultData).toEqual('Mock Data');
    });
  }));
});
