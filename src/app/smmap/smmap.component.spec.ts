import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmapComponent } from './smmap.component';

describe('SmmapComponent', () => {
  let component: SmmapComponent;
  let fixture: ComponentFixture<SmmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
