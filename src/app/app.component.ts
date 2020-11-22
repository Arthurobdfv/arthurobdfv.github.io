import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppModule } from '../app/app.module';
import { Linktype } from '../models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arthuro Verissimo';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(){
  }
}
