import { Component, OnInit, Injectable } from '@angular/core';

import { GameProject } from '../../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-projects',
  templateUrl: './game-projects.component.html',
  styleUrls: ['./game-projects.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class GameProjectsComponent implements OnInit {

  m_gameProjects:GameProject[];

  constructor(
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    this.http.get("https://itch.io/api/1/DJg2wXLElfwueKfkYj2dgiim0Zq4JPZobGKUEvh7/my-games").subscribe((resp: GameProject[]) => {
      this.m_gameProjects = resp;
    });
  }

}
