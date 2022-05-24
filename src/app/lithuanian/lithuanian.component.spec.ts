import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LithuanianComponent } from './lithuanian.component';

describe('LithuanianComponent', () => {
  let component: LithuanianComponent;
  let fixture: ComponentFixture<LithuanianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LithuanianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LithuanianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
