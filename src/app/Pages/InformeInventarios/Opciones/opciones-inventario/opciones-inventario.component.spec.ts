import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesInventarioComponent } from './opciones-inventario.component';

describe('OpcionesInventarioComponent', () => {
  let component: OpcionesInventarioComponent;
  let fixture: ComponentFixture<OpcionesInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesInventarioComponent]
    });
    fixture = TestBed.createComponent(OpcionesInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
