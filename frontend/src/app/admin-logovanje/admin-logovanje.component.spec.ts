import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogovanjeComponent } from './admin-logovanje.component';

describe('AdminLogovanjeComponent', () => {
  let component: AdminLogovanjeComponent;
  let fixture: ComponentFixture<AdminLogovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogovanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
