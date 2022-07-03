/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddmatComponent } from './addmat.component';

describe('AddmatComponent', () => {
  let component: AddmatComponent;
  let fixture: ComponentFixture<AddmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
