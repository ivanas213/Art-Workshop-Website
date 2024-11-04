import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRadioniceComponent } from './adm-radionice.component';

describe('AdmRadioniceComponent', () => {
  let component: AdmRadioniceComponent;
  let fixture: ComponentFixture<AdmRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
