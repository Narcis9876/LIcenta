import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiProfComponent } from './detalii-prof.component';

describe('DetaliiProfComponent', () => {
  let component: DetaliiProfComponent;
  let fixture: ComponentFixture<DetaliiProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
