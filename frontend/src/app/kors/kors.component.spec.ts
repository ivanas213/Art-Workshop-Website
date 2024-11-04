import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorsComponent } from './kors.component';

describe('KorsComponent', () => {
  let component: KorsComponent;
  let fixture: ComponentFixture<KorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
