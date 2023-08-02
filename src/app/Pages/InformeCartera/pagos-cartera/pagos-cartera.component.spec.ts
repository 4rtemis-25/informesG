import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosCarteraComponent } from './pagos-cartera.component';

describe('PagosCarteraComponent', () => {
  let component: PagosCarteraComponent;
  let fixture: ComponentFixture<PagosCarteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosCarteraComponent]
    });
    fixture = TestBed.createComponent(PagosCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
