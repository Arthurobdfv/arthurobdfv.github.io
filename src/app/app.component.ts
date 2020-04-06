import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app/app.module';
import { Linktype } from '../models';

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
    console.log(Object.values(Linktype).map(link => ));
  }
}
