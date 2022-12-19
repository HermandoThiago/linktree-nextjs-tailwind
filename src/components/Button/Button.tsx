import Link from "next/link";
import { ReactNode } from "react";

interface IPropsButton {
    children: ReactNode
    link: string
    icon?: ReactNode
}

export function Button({ children, link, icon }: IPropsButton){
    return (
        <button 
            className="
                bg-cyan-300 font-bold text-cyan-900 w-80 rounded-md py-3 hover:scale-110 duration-150
                hover:origin-bottom hover:rotate-3 my-3 shadow-2xl 
                ">
            <Link className="flex justify-center items-center" href={link}>
               {icon} <span className="mx-1">{children}</span>
            </Link>
        </button>
    )
}