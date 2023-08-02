import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTotalComponent } from './informe-total.component';

describe('InformeTotalComponent', () => {
  let component: InformeTotalComponent;
  let fixture: ComponentFixture<InformeTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeTotalComponent]
    });
    fixture = TestBed.createComponent(InformeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
