import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdinateurComponent } from './update-ordinateur.component';

describe('UpdateOrdinateurComponent', () => {
  let component: UpdateOrdinateurComponent;
  let fixture: ComponentFixture<UpdateOrdinateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrdinateurComponent]
    });
    fixture = TestBed.createComponent(UpdateOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
