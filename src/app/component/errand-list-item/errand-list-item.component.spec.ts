import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandListItemComponent } from './errand-list-item.component';

describe('ErrandListItemComponent', () => {
  let component: ErrandListItemComponent;
  let fixture: ComponentFixture<ErrandListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
