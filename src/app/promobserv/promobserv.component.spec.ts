import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromobservComponent } from './promobserv.component';

describe('PromobservComponent', () => {
  let component: PromobservComponent;
  let fixture: ComponentFixture<PromobservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromobservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromobservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
