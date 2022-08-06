import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapinangComponent } from './bootstrapinang.component';

describe('BootstrapinangComponent', () => {
  let component: BootstrapinangComponent;
  let fixture: ComponentFixture<BootstrapinangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapinangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapinangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
