import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/routed/recipe-detail/recipe-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StrToArrayPipe } from './shared/str-to-array.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule, RecipeModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
