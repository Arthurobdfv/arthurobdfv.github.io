export interface GameProject{
    cover_url?:string;
    short_text?:string;
    title?:string;
    views_count?:string;
}

export interface GameList{
    games?:GameProject[];
}

export interface Project{
    title?:string;
    description?:string;
    imageUrl?:string;
    links?:string[];
}

export enum Linktype{
    Github = "./assets/icons/itchio-logo.textless-black.svg",
    ItchIO = "icoItchIO",
    Instagram = "icoInstagram",
    Linkedin = "icoLinkedin"
}

export class Link{
    linkType:Linktype;
    url:string;
}