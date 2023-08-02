import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGeneralCarteraComponent } from './informe-general-cartera.component';

describe('InformeGeneralCarteraComponent', () => {
  let component: InformeGeneralCarteraComponent;
  let fixture: ComponentFixture<InformeGeneralCarteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeGeneralCarteraComponent]
    });
    fixture = TestBed.createComponent(InformeGeneralCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
