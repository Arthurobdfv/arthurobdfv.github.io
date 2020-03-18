import { Component, OnInit, Injectable } from '@angular/core';

import { GameProject, GameList } from '../../models';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-game-projects',
  templateUrl: './game-projects.component.html',
  styleUrls: ['./game-projects.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class GameProjectsComponent implements OnInit {

  m_itchBaseUrl:string = "https://itch.io/api/1/DJg2wXLElfwueKfkYj2dgiim0Zq4JPZobGKUEvh7/my-games"

  m_gameProjects:GameProject[];

  m_objsGameProjects:Observable<GameProject[]>

  constructor(
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    var x = this.getProjHttp().subscribe((data) => {
        this.m_gameProjects = data;
    });
}

  getProjHttp(){
    return this.http.get<GameProject[]>("https://cors-anywhere.herokuapp.com/https://itch.io/api/1/DJg2wXLElfwueKfkYj2dgiim0Zq4JPZobGKUEvh7/my-games")
    .pipe(map((data)=>{
      return (data as any).games;
    }));
  }


  setProjects(values:GameProject[]){
    this.m_gameProjects = values;
  }
  


}
