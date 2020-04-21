export interface GameProject{
    cover_url?:string;
    short_text?:string;
    title?:string;
    views_count?:string;
    url?:string;
}

export interface GameList{
    games?:GameProject[];
}

export interface Project{
    title?:string;
    description?:string;
    imageUrl?:string;
    links?:Link[];
}

export enum Linktype{
    Github = "github",
    ItchIO = "itch-io",
    Instagram = "instagram",
    Linkedin = "linkedin"
}

export enum Technology{
    Unity = "unity",
    Angular = "angular",
    NodeJS = "node-js",
    React = "react",
    Python = "python",
    Bootstrap = "bootstrap"
}

export class Link{
    linkType:Linktype;
    url:string;
}