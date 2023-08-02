import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasContadoComponent } from './ventas-contado.component';

describe('VentasContadoComponent', () => {
  let component: VentasContadoComponent;
  let fixture: ComponentFixture<VentasContadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasContadoComponent]
    });
    fixture = TestBed.createComponent(VentasContadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
