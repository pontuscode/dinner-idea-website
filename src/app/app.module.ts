import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './material/material.module';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { RecipeGridComponent } from './components/main-section/recipe-grid/recipe-grid.component';
import { RecipeComponent } from './components/main-section/recipe-grid/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    RecipeGridComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
