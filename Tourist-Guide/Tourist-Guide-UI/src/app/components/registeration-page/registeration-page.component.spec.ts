import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationPageComponent } from './registeration-page.component';

describe('RegisterationPageComponent', () => {
  let component: RegisterationPageComponent;
  let fixture: ComponentFixture<RegisterationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
