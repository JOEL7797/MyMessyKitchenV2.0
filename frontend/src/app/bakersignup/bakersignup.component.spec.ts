import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakersignupComponent } from './bakersignup.component';

describe('BakersignupComponent', () => {
  let component: BakersignupComponent;
  let fixture: ComponentFixture<BakersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
