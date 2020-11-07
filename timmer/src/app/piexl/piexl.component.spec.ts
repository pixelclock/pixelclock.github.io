import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiexlComponent } from './piexl.component';

describe('PiexlComponent', () => {
  let component: PiexlComponent;
  let fixture: ComponentFixture<PiexlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiexlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiexlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
