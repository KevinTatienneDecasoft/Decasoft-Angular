import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFridgeItemComponent } from './my-fridge-item.component';

describe('MyFridgeItemComponent', () => {
  let component: MyFridgeItemComponent;
  let fixture: ComponentFixture<MyFridgeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFridgeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFridgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
