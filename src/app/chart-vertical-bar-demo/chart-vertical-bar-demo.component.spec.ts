import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVerticalBarDemoComponent } from './chart-vertical-bar-demo.component';

describe('ChartVerticalBarDemoComponent', () => {
  let component: ChartVerticalBarDemoComponent;
  let fixture: ComponentFixture<ChartVerticalBarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartVerticalBarDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartVerticalBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
