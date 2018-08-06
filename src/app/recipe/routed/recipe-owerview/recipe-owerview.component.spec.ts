import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOwerviewComponent } from './recipe-owerview.component';

describe('RecipeOwerviewComponent', () => {
  let component: RecipeOwerviewComponent;
  let fixture: ComponentFixture<RecipeOwerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeOwerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOwerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
