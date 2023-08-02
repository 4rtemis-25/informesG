import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMabeComponent } from './ventas-mabe.component';

describe('VentasMabeComponent', () => {
  let component: VentasMabeComponent;
  let fixture: ComponentFixture<VentasMabeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasMabeComponent]
    });
    fixture = TestBed.createComponent(VentasMabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
