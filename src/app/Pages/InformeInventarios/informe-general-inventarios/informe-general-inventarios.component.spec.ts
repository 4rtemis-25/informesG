import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGeneralInventariosComponent } from './informe-general-inventarios.component';

describe('InformeGeneralInventariosComponent', () => {
  let component: InformeGeneralInventariosComponent;
  let fixture: ComponentFixture<InformeGeneralInventariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeGeneralInventariosComponent]
    });
    fixture = TestBed.createComponent(InformeGeneralInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
