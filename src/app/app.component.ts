import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app/app.module';
import { Linktype } from '../models';
//import { faGithub } from '@fortawesome/angular-fontawesome/'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arthuro-portfolio';

  ngOnInit(){
    this.LoadIcons();
  }

  LoadIcons(){
    console.log(Object.values(Linktype).map(link => Linktype[link]));
  }
}
