type GoalItem = {
    id:number,
    goal:string,
    img:string,
    date:string
  }
  
export type RoadmapItem = {
    id:number,
    date:string,
    title:string,
    description:string,
    goals:GoalItem[],
  }

const roadmap: RoadmapItem[] = [
    {
        id:0,
        title:"Do you see any Teletubbies in here?",
        description:"Do you see a slender plastic tag clipped to my shirt with my name printed on it? Because you're here shopping for an infant named Jeb.",
        date:"04/07/2023",
        goals:[]
    },
    {
        id:1,
        title:"Normally, both your asses would be dead as fucking fried chicken.",
        description:"But you happen to pull this shit while I'm in a transitional period",
        date:"04/20/2023",
        goals:[]
    },
    {
        id:2,
        title:"My money's in that office, right? ",
        description:"If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.",
        date:"05/04/2023",
        goals:[]
    },
    {
        id:3,
        title:"Your bones don't break, mine do.",
        description:"That's clear. Your cells react to bacteria and viruses differently than mine.",
        date:"05/31/2023",
        goals:[]
    },
    {
        id:4,
        title:"Now that there is the Tec-9.",
        description:"A crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.",
        date:"07/15/2023",
        goals:[]
    },

]
export default roadmap;