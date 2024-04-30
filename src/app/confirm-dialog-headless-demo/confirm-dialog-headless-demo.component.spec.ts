import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogHeadlessDemoComponent } from './confirm-dialog-headless-demo.component';

describe('ConfirmDialogHeadlessDemoComponent', () => {
  let component: ConfirmDialogHeadlessDemoComponent;
  let fixture: ComponentFixture<ConfirmDialogHeadlessDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogHeadlessDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDialogHeadlessDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
