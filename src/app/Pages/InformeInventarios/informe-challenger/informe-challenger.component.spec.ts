import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeChallengerComponent } from './informe-challenger.component';

describe('InformeChallengerComponent', () => {
  let component: InformeChallengerComponent;
  let fixture: ComponentFixture<InformeChallengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeChallengerComponent]
    });
    fixture = TestBed.createComponent(InformeChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
