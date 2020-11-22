import { Component, OnInit, Injectable } from '@angular/core';

import { GameProject, GameList } from '../../models';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GameProjectService } from './services/game-project.service';
@Component({
  selector: 'app-game-projects',
  templateUrl: './game-projects.component.html',
  styleUrls: ['./game-projects.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class GameProjectsComponent implements OnInit {

  m_itchBaseUrl:string = "https://arthuro-backend.herokuapp.com/games"

  gameProjects$:Observable<GameProject[]>

  constructor(
    private http: HttpClient,
    private projectService: GameProjectService
    ) {}

  ngOnInit(): void {
    this.gameProjects$ = this.projectService.getGameProjects();
  }
}
