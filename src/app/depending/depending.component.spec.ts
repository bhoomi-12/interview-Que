import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependingComponent } from './depending.component';

describe('DependingComponent', () => {
  let component: DependingComponent;
  let fixture: ComponentFixture<DependingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
