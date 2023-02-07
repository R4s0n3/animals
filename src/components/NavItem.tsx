import React from 'react'
import { type NavItem_Type } from './Navigation'

type Props = {
    item: NavItem_Type,
    zId:number,
    open: boolean
}


const NavItem = ({item, zId, open}: Props) => {
  return (
    <li className={`py-2 px-4 text-neutral-100 bg-slate-900 drop-shadow-xl list-none ${open ? "block slideIn" : "hidden"} items-center justify-center z-${zId * 10} transition-all`}><a className="block uppercase" href={item.route}>{item.id}</a></li>
  )
}

export default NavItem