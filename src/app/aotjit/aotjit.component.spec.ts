import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotjitComponent } from './aotjit.component';

describe('AotjitComponent', () => {
  let component: AotjitComponent;
  let fixture: ComponentFixture<AotjitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotjitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AotjitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
