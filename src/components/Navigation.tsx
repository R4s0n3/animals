import React from "react"
import NavItem from "./NavItem"

export type NavItem_Type = {
    id:string,
    route:string
}

type Props = {
    classNames?: string
}

export function Navigation({classNames = ""}:Props) {
        const [navOpen, setNavOpen] = React.useState(false)


    
const navItems:NavItem_Type[] = [

    {
        id:"Story",
        route:"#story"
    },
    {
        id:"Products",
        route:"#products"
    },
    {
        id:"Roadmap",
        route:"#roadmap"
    }

]

    function handleNavOpen () {
        setNavOpen(prev => !prev)
    }   

    return <nav className={`fixed left-auto right-0 z-50 p-2 ${classNames}`}>
        <ul className="flex justify-center text-center items-center gap-2 transition-all">
        {navItems.map((item, id) => <NavItem key={id} zId={id} item={item} open={navOpen} />)}
        <button onClick={handleNavOpen} className="p-2 z-40 uppercase drop-shadow-xl text-neutral-100 bg-slate-900 transition-all">{navOpen ? "Close" : "Open"}</button>
        </ul>
    </nav>
}