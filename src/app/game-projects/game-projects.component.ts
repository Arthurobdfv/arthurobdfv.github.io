import { Component, OnInit, Injectable } from '@angular/core';

import { GameProject } from '../../models';
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
        console.log(data);
    });
}

  getProjects(){
    return this.http.jsonp<GameProject[]>(this.m_itchBaseUrl,'JSONP_CALLBACK').pipe(
      tap(data => console.log(data),error => console.log(error)));
  }

  getProjHttp(){
    return this.http.get("https://cors-anywhere.herokuapp.com/https://itch.io/api/1/DJg2wXLElfwueKfkYj2dgiim0Zq4JPZobGKUEvh7/my-games");
  }


  setProjects(values:GameProject[]){
    this.m_gameProjects = values;
  }
  


}
