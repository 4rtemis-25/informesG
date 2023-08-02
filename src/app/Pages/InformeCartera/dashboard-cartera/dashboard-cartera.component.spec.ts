import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarteraComponent } from './dashboard-cartera.component';

describe('DashboardCarteraComponent', () => {
  let component: DashboardCarteraComponent;
  let fixture: ComponentFixture<DashboardCarteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCarteraComponent]
    });
    fixture = TestBed.createComponent(DashboardCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
