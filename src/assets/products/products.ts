export type Product = {
    id:number,
    title:string,
    desc:string,
    img:string,
    type:string,
    price:number,
    ship:number
}

const products: Product[] = [
    {
        id:0,
        title:"Spunky Monkey",
        desc:"'Uh, dis shit smell skunky.'",
        type:"single",
        img:"https://cdn.discordapp.com/attachments/1021587013314551859/1072370993152151573/monkey.png",
        price: 1100,
        ship:499,
    },
    {
        id:1,
        title:"OtterSpace Admiral Rhôn",
        desc:"'You ain't goin Crazy'nough boi.'",

        type:"single",
        img:"https://cdn.discordapp.com/attachments/1021587013314551859/1072370993479286854/otter.png",
        price: 1100,
        ship:499,
    },
    {
        id:0,
        title:"Strong-Bull Silver",
        desc:"'In the end y'all gonna pay me!'",
        type:"single",
        img:"https://cdn.discordapp.com/attachments/1021587013314551859/1072370992871120936/bull.png",
        price: 1100,
        ship:499,
    },
    {
        id:0,
        title:"Crew Collecters Bundle",
        desc:"All three Notepads together in one package.",
        type:"bundle",
        img:"",
        price: 3000,
        ship:1299,
    },
]
export default products;