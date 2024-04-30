import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDoughnutDemoComponent } from './chart-doughnut-demo.component';

describe('ChartDoughnutDemoComponent', () => {
  let component: ChartDoughnutDemoComponent;
  let fixture: ComponentFixture<ChartDoughnutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartDoughnutDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartDoughnutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
