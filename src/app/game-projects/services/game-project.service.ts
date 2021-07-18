import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameProject, IconType, Link, Linktype, Project, Technology } from 'src/models';

@Injectable({
    providedIn: 'root'
})
export class GameProjectService {

    baseUrl:string = "https://arthuro-backend.herokuapp.com"

    constructor(
        private http: HttpClient,
        private fireDb: AngularFireDatabase
    ) {
    }

    getGameProjects(): Observable<GameProject[]>{
        return this.http.get<GameProject[]>(`${this.baseUrl}/games`);
    }

    getProjects(): Observable<Project[]>{
        return this.fireDb.list('projects').snapshotChanges().pipe(
                map(v => {
                return v.map(obj => {
                    var payload : any = obj.payload.val();
                    var proj: Project = {
                        description: payload.Description,
                        imageUrl: payload.ImageUrl,
                        links: payload.Links.map(l => {
                            var link: Link = {
                                iconType: l.IconType as IconType,
                                linkType: l.LinkType as Linktype,
                                url: l.Url
                            }
                            return link;
                        }),
                        title: payload.Title,
                        technologies: payload.Technologies.map(t => t as Technology)
                    }
                    return proj
                })
            })
        )
    }

}