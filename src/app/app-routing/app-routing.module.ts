import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component'
import { GameProjectsComponent } from '../game-projects/game-projects.component'
import { CvComponent } from '../cv/cv.component';
import { AboutComponent } from '../about/about.component'

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'games', component: GameProjectsComponent},
  { path: 'resume', component: CvComponent },
  { path: 'about', component: AboutComponent }
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
