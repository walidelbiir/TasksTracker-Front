import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantPrivilegesComponent } from './grant-privileges.component';

describe('GrantPrivilegesComponent', () => {
  let component: GrantPrivilegesComponent;
  let fixture: ComponentFixture<GrantPrivilegesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrantPrivilegesComponent]
    });
    fixture = TestBed.createComponent(GrantPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
