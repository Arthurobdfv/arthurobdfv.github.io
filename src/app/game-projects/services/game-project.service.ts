import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameProject } from 'src/models';

@Injectable({
    providedIn: 'root'
})
export class GameProjectService {

    baseUrl:string = "https://arthuro-backend.herokuapp.com"

    constructor(
        private http: HttpClient
    ) {
    }

    getGameProjects(): Observable<GameProject[]>{
        return this.http.get<GameProject[]>(`${this.baseUrl}/games`);
    }
}