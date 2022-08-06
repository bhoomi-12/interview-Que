import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumepipeComponent } from './costumepipe.component';

describe('CostumepipeComponent', () => {
  let component: CostumepipeComponent;
  let fixture: ComponentFixture<CostumepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumepipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
