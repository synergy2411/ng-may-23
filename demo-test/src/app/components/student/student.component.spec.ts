import { TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('Student Component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
    }).compileComponents();
  });

  it('should populate student data in component', () => {
    const fixture = TestBed.createComponent(StudentComponent);

    const comp = fixture.componentInstance;

    const service = fixture.debugElement.injector.get(StudentService);

    expect(comp.studentData.name).toEqual(service.studentData.name);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(StudentComponent);

    const comp = fixture.componentInstance;

    expect(comp).toBeTruthy();
  });
});

// describe('Student Component', () => {
//   let comp: StudentComponent;

//   beforeEach(() => {
//     comp = new StudentComponent();
//   });

//   afterEach(() => {
//     comp = null;
//   });

//   it('should calculate the student result', () => {
//     let studentResult = comp.calculateResult();

//     expect(studentResult).toBe('FAIL');
//   });

//   it('should return the student average marks', () => {
//     let avgMarks = comp.averageMarks([30, 40, 50]);

//     expect(avgMarks).toBe(40);
//   });

//   it('should return the sum of all marks', () => {
//     // Arrange

//     // Act

//     let result = comp.totalMarks([40, 50]);

//     // Assert

//     expect(result).toBe(90);
//   });

//   it('should test the match', () => {
//     let x = ['one', 'two', 'three'];

//     let y = 'Hello World';

//     // expect(x).toContain('one');
//     // expect(y).toContain('Hello');

//     expect(y).toMatch(/hel/i);
//   });

//   it('should test for boolean values', () => {
//     let x = 0;

//     expect(x).toBeFalsy();
//   });

//   it('should test the jasmine matchers', () => {
//     // let x = 10;
//     // let y = 10;

//     let x = ['one'];
//     let y = ['one'];

//     expect(x).toEqual(y);
//   });
// });
