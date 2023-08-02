import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpcionesCarteraComponent } from './dashboard-opciones-cartera.component';

describe('DashboardOpcionesCarteraComponent', () => {
  let component: DashboardOpcionesCarteraComponent;
  let fixture: ComponentFixture<DashboardOpcionesCarteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOpcionesCarteraComponent]
    });
    fixture = TestBed.createComponent(DashboardOpcionesCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
