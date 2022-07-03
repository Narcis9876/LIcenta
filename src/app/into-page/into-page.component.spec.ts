import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoPageComponent } from './into-page.component';

describe('IntoPageComponent', () => {
  let component: IntoPageComponent;
  let fixture: ComponentFixture<IntoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
