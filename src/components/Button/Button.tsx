import Link from "next/link";
import { ReactNode } from "react";

interface IPropsButton {
    children: ReactNode
    link: string
}

export function Button({ children, link }: IPropsButton){
    return (
        <button 
            className="
                bg-cyan-300 font-bold text-cyan-900 text-center w-80 block rounded-md py-3 hover:scale-110 duration-150
                hover:origin-bottom hover:rotate-3 my-3 shadow-2xl
                ">
            <Link href={link}>
                {children}
            </Link>
        </button>
    )
}