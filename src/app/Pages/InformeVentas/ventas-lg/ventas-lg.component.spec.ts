import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasLgComponent } from './ventas-lg.component';

describe('VentasLgComponent', () => {
  let component: VentasLgComponent;
  let fixture: ComponentFixture<VentasLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasLgComponent]
    });
    fixture = TestBed.createComponent(VentasLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
