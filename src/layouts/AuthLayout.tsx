import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Logo from "../components/Logo";

export default function AuthLayout() {
    return (
        <>
            <div className="bg-slate-800 min-h-screen">
               
                <div className="py-10 mx-auto max-w-lg">
                <Logo/>
                    <Outlet />
                </div>
            </div>

            <Toaster position="top-right"/>

        </>
    )
}
