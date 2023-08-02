import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdelantosComponent } from './adelantos.component';

describe('AdelantosComponent', () => {
  let component: AdelantosComponent;
  let fixture: ComponentFixture<AdelantosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdelantosComponent]
    });
    fixture = TestBed.createComponent(AdelantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
