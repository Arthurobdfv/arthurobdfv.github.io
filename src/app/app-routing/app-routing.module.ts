import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component'
import { GameProjectsComponent } from '../game-projects/game-projects.component'

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'games', component: GameProjectsComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
