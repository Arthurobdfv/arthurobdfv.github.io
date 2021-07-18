import { Component, Input, OnInit } from '@angular/core';
import { Project, Technology } from '../../models';
import { ProjectList } from '../../mock-projects';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularFirestore } from '@angular/fire/firestore';
import { GameProjectService } from '../game-projects/services/game-project.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input()
  m_filtered:Technology[];
  m_projectList:Observable<Project[]>;
  m_allProjects:Observable<Project[]>;

  constructor(
    private projectService: GameProjectService,
  ) { }

  ngOnInit(): void {
    //this.m_projectList = ProjectList;
    this.m_allProjects = this.projectService.getProjects();
    this.projectService.getProjects().subscribe(s => {
        console.log(s)
        console.log(typeof(s))
    });
    this.m_projectList = this.m_allProjects;
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

  onFilterChange(technologies: Technology[]){
    if(technologies.length > 0)
      this.m_projectList = this.m_allProjects.pipe(map(projects => {
        let filtered = projects.filter(proj => proj.technologies.some(r => technologies.includes(r)))
        return filtered;
      }));
    else
      this.m_projectList = this.m_allProjects;
  }

}
