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