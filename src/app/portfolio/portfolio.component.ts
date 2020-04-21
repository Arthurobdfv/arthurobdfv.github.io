import { Component, OnInit } from '@angular/core';
import { Project } from '../../models';
import { ProjectList } from '../../mock-projects';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  m_projectList:Project[];

  constructor() { }

  ngOnInit(): void {
    this.m_projectList = ProjectList;
  }

  InvertBasedOnIndex(index:number):string {
    if((index % 2) != 0){
      return "inverted";
    }
    else return "";
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
