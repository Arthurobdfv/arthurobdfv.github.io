import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { GameProjectsComponent } from './game-projects/game-projects.component'

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    GameProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent, PresentationComponent],
})
export class AppModule { }
