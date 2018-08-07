import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailComponent } from './recipe-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StrToArrayPipe } from '../../../shared/str-to-array.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { MOCK_RECIPES } from '../../shared/recipe.mock';


describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, NoopAnimationsModule, HttpClientTestingModule],
      declarations: [ RecipeDetailComponent, StrToArrayPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    component.recipe = MOCK_RECIPES[0];
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe('Action toogle',  () => {
    it('div expanded should be undefined on init', () => {
      // given
      component.show = false;
      const divExpanded = fixture.debugElement.query(By.css('.e2e-expended'));
      // then
      // expect
      expect(divExpanded).toBeNull();
    });

    it('div should be expanded on toffle button click', () => {

      const toggleButton =  fixture.debugElement.nativeElement.querySelector('.e2e-toggle-button');

      toggleButton.click();

      const divExpanded = fixture.debugElement.query(By.css('.e2e-expanded'));
      expect(component.show).toBeTruthy();
      expect(divExpanded).toBeDefined();
    });

  });
});
