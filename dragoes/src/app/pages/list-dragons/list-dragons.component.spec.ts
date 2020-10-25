import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragonsComponent } from './list-dragons.component';

describe('ListDragonsComponent', () => {
  let component: ListDragonsComponent;
  let fixture: ComponentFixture<ListDragonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDragonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
