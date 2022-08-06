import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonorepoComponent } from './monorepo.component';

describe('MonorepoComponent', () => {
  let component: MonorepoComponent;
  let fixture: ComponentFixture<MonorepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonorepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonorepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
