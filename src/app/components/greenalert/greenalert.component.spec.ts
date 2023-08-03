import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenalertComponent } from './greenalert.component';

describe('GreenalertComponent', () => {
  let component: GreenalertComponent;
  let fixture: ComponentFixture<GreenalertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenalertComponent]
    });
    fixture = TestBed.createComponent(GreenalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
