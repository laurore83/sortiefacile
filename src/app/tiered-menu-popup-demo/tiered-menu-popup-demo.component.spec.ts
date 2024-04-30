import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieredMenuPopupDemoComponent } from './tiered-menu-popup-demo.component';

describe('TieredMenuPopupDemoComponent', () => {
  let component: TieredMenuPopupDemoComponent;
  let fixture: ComponentFixture<TieredMenuPopupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TieredMenuPopupDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TieredMenuPopupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
