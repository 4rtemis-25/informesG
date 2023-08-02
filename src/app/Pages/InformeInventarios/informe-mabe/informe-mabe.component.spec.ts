import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMabeComponent } from './informe-mabe.component';

describe('InformeMabeComponent', () => {
  let component: InformeMabeComponent;
  let fixture: ComponentFixture<InformeMabeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeMabeComponent]
    });
    fixture = TestBed.createComponent(InformeMabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
