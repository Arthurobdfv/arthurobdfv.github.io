import { Project, Linktype, Link } from './models';

export var ProjectList:Project[] = [
    {title: "Checkers 3D",description:"3D Game Prototype.",imageUrl:"https://img.itch.zone/aW1nLzMwNDMyODIucG5n/315x250%23c/iqb8LL.png",links:[
        {linkType: Linktype.Github, url:"https://github.com/Arthurobdfv/Checkers3D"},
        {linkType: Linktype.ItchIO, url:"https://arthuro-verissimo.itch.io/3d-checkers-prototype"}
    ]},
    {title: "NeonSlash",description:"24hours challenge that i've turned into a full project.",imageUrl:"https://img.itch.zone/aW1nLzMxMjAwMzcucG5n/original/jXgJ8V.png",links:[
        {linkType: Linktype.ItchIO, url:"https://arthuro-verissimo.itch.io/neon-slash"}
    ]},
    {title: "EPM TagPort",description:"Software that i've developed while working for Elipse Software", links:[
        {linkType: Linktype.Github, url:"https://github.com/elipsesoftware/epmtagport"}
    ]}
]