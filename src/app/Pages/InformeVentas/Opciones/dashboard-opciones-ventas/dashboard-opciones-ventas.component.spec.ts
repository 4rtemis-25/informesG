import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpcionesVentasComponent } from './dashboard-opciones-ventas.component';

describe('DashboardOpcionesVentasComponent', () => {
  let component: DashboardOpcionesVentasComponent;
  let fixture: ComponentFixture<DashboardOpcionesVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOpcionesVentasComponent]
    });
    fixture = TestBed.createComponent(DashboardOpcionesVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
