import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStepsComponent } from './cards-steps.component';

describe('CardsStepsComponent', () => {
  let component: CardsStepsComponent;
  let fixture: ComponentFixture<CardsStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
