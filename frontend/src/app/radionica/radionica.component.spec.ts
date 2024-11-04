import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadionicaComponent } from './radionica.component';

describe('RadionicaComponent', () => {
  let component: RadionicaComponent;
  let fixture: ComponentFixture<RadionicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadionicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadionicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
