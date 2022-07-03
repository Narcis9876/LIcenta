import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatstudComponent } from './matstud.component';

describe('MatstudComponent', () => {
  let component: MatstudComponent;
  let fixture: ComponentFixture<MatstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
