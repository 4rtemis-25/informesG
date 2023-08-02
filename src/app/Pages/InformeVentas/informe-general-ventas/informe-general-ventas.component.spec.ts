import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGeneralVentasComponent } from './informe-general-ventas.component';

describe('InformeGeneralVentasComponent', () => {
  let component: InformeGeneralVentasComponent;
  let fixture: ComponentFixture<InformeGeneralVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeGeneralVentasComponent]
    });
    fixture = TestBed.createComponent(InformeGeneralVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
