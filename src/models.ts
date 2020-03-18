export interface GameProject{
    cover_url?:string;
    short_text?:string;
    title?:string;
    views_count?:string;
}

export interface GameList{
    games?:GameProject[];
}