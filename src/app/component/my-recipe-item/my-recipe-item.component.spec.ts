import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeItemComponent } from './my-recipe-item.component';

describe('MyRecipeItemComponent', () => {
  let component: MyRecipeItemComponent;
  let fixture: ComponentFixture<MyRecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
