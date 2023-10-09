import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBindComponent } from './simple-bind.component';

describe('SimpleBindComponent', () => {
  let component: SimpleBindComponent;
  let fixture: ComponentFixture<SimpleBindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleBindComponent]
    });
    fixture = TestBed.createComponent(SimpleBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
