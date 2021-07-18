import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFile, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faItchIo, faInstagram, faLinkedin, faUnity, faAngular, faPython, faNodeJs, faReact, faBootstrap, faCuttlefish, faJsSquare } from '@fortawesome/free-brands-svg-icons';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { GameProjectsComponent } from './game-projects/game-projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CvComponent } from './cv/cv.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { firebaseConfig } from 'src/environments/environment';
import { TechnologySelectorComponent } from './technology-selector/technology-selector/technology-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    GameProjectsComponent,
    PortfolioComponent,
    CvComponent,
    AboutComponent,
    ContactComponent,
    TechnologySelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent, PresentationComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faLinkedin,faGithub,faItchIo,faInstagram,faUnity, faAngular, faPython, faNodeJs, faReact, faBootstrap, faFile, faCuttlefish, faPlay, faJsSquare);
  }
 }
