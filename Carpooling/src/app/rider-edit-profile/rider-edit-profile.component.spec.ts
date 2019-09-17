import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderEditProfileComponent } from './rider-edit-profile.component';

describe('RiderEditProfileComponent', () => {
  let component: RiderEditProfileComponent;
  let fixture: ComponentFixture<RiderEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
