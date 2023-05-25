import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { StudentService } from './student.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Student Component', () => {
  let fixture: ComponentFixture<StudentComponent>;
  let comp: StudentComponent;
  let de: DebugElement;
  let service: StudentService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    service = fixture.debugElement.injector.get(StudentService);
  });

  it('should update the counter on h2, when button is clicked', () => {
    // let h2 = de.nativeElement.query(By.css("h2"));
    // let h2 = de.nativeElement.querySelector("h2");
    // let btn = de.nativeElement.query(By.css("#btnIncrease")) as HTMLButtonElement;

    let h2 = de.query(By.css('h2'));
    let btn = de.query(By.css('#btnIncrease'));

    btn.triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(parseInt(h2.nativeElement.textContent)).toBe(comp.counter);
  });

  it('should populate student data in component', () => {
    fixture.detectChanges();

    expect(comp.studentData.name).toBe(service.studentData.name);
  });

  it('should create the component', () => {
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
