import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecimientoCarteraComponent } from './crecimiento-cartera.component';

describe('CrecimientoCarteraComponent', () => {
  let component: CrecimientoCarteraComponent;
  let fixture: ComponentFixture<CrecimientoCarteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrecimientoCarteraComponent]
    });
    fixture = TestBed.createComponent(CrecimientoCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
