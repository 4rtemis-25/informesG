import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpcionesInventarioComponent } from './dashboard-opciones-inventario.component';

describe('DashboardOpcionesInventarioComponent', () => {
  let component: DashboardOpcionesInventarioComponent;
  let fixture: ComponentFixture<DashboardOpcionesInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOpcionesInventarioComponent]
    });
    fixture = TestBed.createComponent(DashboardOpcionesInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
