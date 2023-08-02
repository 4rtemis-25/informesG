import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeLgComponent } from './informe-lg.component';

describe('InformeLgComponent', () => {
  let component: InformeLgComponent;
  let fixture: ComponentFixture<InformeLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeLgComponent]
    });
    fixture = TestBed.createComponent(InformeLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
