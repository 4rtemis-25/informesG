import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasChallengerComponent } from './ventas-challenger.component';

describe('VentasChallengerComponent', () => {
  let component: VentasChallengerComponent;
  let fixture: ComponentFixture<VentasChallengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasChallengerComponent]
    });
    fixture = TestBed.createComponent(VentasChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
