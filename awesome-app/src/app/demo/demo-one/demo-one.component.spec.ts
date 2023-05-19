import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOneComponent } from './demo-one.component';

describe('DemoOneComponent', () => {
  let component: DemoOneComponent;
  let fixture: ComponentFixture<DemoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
