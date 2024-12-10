import { ReactNode } from "react";


export default function ErrorMessage({ children }:{children :ReactNode}) {
    return (
        <p className="bg-red-50 text-red-600 p-2 uppercase text-center text-sm font-bold  ">
            {children}
        </p>
    )
}
