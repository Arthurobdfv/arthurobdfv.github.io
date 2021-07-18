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
    technologies?:Technology[]
}

export enum Linktype{
    Github = "github",
    ItchIO = "itch-io",
    Instagram = "instagram",
    Linkedin = "linkedin",
    Play = "play"
}

export enum IconType{
    Brand = 'fab',
    Common = 'fas'
}

export enum Technology  {
    Unity = "unity",
    Angular = "angular",
    NodeJS = "nodejs",
    React = "react",
    Python = "python",
    Bootstrap = "bootstrap",
    CSharp = "csharp",
    Cpp = "cpp",
    JavaScript = "javascript",
    TypeScript = "typescript"
}

export enum IconImageType {
    FortAwesome = "FortAwesome",
    ExternalLink = "ExternalLink",
}

export class Link {
    linkType:Linktype;
    iconType: IconType;
    url:string;
}

export class DisplayIcon {
    iconType: IconType;
    iconImageType: IconImageType;
    iconHTMLString: string;
}

export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
}