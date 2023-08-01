import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSettingsComponent } from './update-settings.component';

describe('UpdateSettingsComponent', () => {
  let component: UpdateSettingsComponent;
  let fixture: ComponentFixture<UpdateSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSettingsComponent]
    });
    fixture = TestBed.createComponent(UpdateSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
