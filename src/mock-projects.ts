import { Project, Linktype, Link } from './models';

export var ProjectList:Project[] = [
    {
        title: "NeonSlash",
        description:"Neon Slash is a snake-inspired game that I've built the main game loop in under 24h as a challenge. After it was done I was really happy with the result and decided to turn it into a finished end product, with some of the features that a lot of games has on these days.\n\nThis project made me learn about Google Play services such as Signing in, implementing custom leaderboards and Firebase integration that I'll use it as a data analisys tool in the future.\n\nThis project is currently available to be downloaded on google play store, and you can check the Itch.io project page down here, where it has a link to the version that I've ended up after the 24h challenge.",
        imageUrl:"https://img.itch.zone/aW1nLzMxMjAwMzcucG5n/original/jXgJ8V.png",
        links:[
            {linkType: Linktype.ItchIO, url:"https://arthuro-verissimo.itch.io/neon-slash"}
        ]
    },
    {
        title: "BeTheHero",
        description:"This application was developed to help non-governamental organizations to achieve their projects by allowing people to donate money for incidents posted by the NGO.The project is near of the end, lacking only on the mobile part that is currently on development.\n\nThis project was developed using the following technologies, NodeJs for the backend, React for the front-end web and currently being developed for mobile using ReactNative and Expo.", 
        imageUrl:"https://github.com/Arthurobdfv/BeTheHero/raw/master/.github/logo.svg?sanitize=true",
        links:[
            {linkType: Linktype.Github, url: "https://github.com/Arthurobdfv/BeTheHero"}
        ],
    },
    {
        title: "Checkers 3D",
        description:"This is a checkers prototype that I've developed in 48h to learn about PBR Materials and as a Programming-heavy type of project to sharpen my coding skills and practice some SOLID principles.\n\nThe entire project code is available on the github page with the link down here, you can also find the Itch.io page where you can play it on the browser..",
        imageUrl:"https://img.itch.zone/aW1nLzMwNDMyODIucG5n/315x250%23c/iqb8LL.png",
        links:[
            {linkType: Linktype.Github, url:"https://github.com/Arthurobdfv/Checkers3D"},
            {linkType: Linktype.ItchIO, url:"https://arthuro-verissimo.itch.io/3d-checkers-prototype"}
        ]
    },
    {
        title: "EPM TagPort",
        description:"EPM TagPort is the tool that I've developed while working on Elipse Software, it is used paired with one of Elipse's main software to get subsets/chunks of data and export ir as a HDF5 file format.It is possible to to the reverse operation too, getting the HDF5 files containing the chunk of data and inserting it into an EPM Software database.\n\nThe technologies used in this project were C# with .NET and WPF, the decision of using HDF5 file format was made after researching about it's optimal file size and the I/O operations speed. It was important to also optimize the reading and writing memory alocation as some chunks of data had about 5 years of information collected with a 10seconds of frequency.\n\nDown here you can see a github link with the whole project explanation and also some Python scripts to read and visualize the data contained in the HDF5 file;", 
        imageUrl:"../assets/Images/software-learn-programming.jpg",
        links:[
            {linkType: Linktype.Github, url:"https://github.com/elipsesoftware/epmtagport"}
        ]
    }
]