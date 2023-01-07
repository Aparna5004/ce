import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyviewComponent } from './cyview.component';

describe('CyviewComponent', () => {
  let component: CyviewComponent;
  let fixture: ComponentFixture<CyviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
