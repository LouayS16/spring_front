import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateursComponent } from './ordinateurs.component';

describe('OrdinateursComponent', () => {
  let component: OrdinateursComponent;
  let fixture: ComponentFixture<OrdinateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinateursComponent]
    });
    fixture = TestBed.createComponent(OrdinateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
