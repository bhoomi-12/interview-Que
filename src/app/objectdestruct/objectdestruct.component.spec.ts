import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectdestructComponent } from './objectdestruct.component';

describe('ObjectdestructComponent', () => {
  let component: ObjectdestructComponent;
  let fixture: ComponentFixture<ObjectdestructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectdestructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectdestructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
