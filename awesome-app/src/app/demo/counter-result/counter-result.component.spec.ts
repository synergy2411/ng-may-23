import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterResultComponent } from './counter-result.component';

describe('CounterResultComponent', () => {
  let component: CounterResultComponent;
  let fixture: ComponentFixture<CounterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
