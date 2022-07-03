import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStudComponent } from './map-stud.component';

describe('MapStudComponent', () => {
  let component: MapStudComponent;
  let fixture: ComponentFixture<MapStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
