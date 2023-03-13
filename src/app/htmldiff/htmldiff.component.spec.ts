import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldiffComponent } from './htmldiff.component';

describe('HtmldiffComponent', () => {
  let component: HtmldiffComponent;
  let fixture: ComponentFixture<HtmldiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmldiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmldiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
