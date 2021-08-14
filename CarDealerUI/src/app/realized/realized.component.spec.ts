import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizedComponent } from './realized.component';

describe('RealizedComponent', () => {
  let component: RealizedComponent;
  let fixture: ComponentFixture<RealizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
