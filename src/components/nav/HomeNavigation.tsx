import { Link } from "react-router-dom";


export default function HomeNavigation() {


    return (
        <>
            <Link
                className="text-white p-2 uppercase font-black "
                to="/auth/login"
            >
                Iniciar Sesión
            </Link>
            <Link
                className="text-slate-800 bg-lime-500 rounded-lg p-2 uppercase font-black "
                to="/auth/register"
            >
                Registrarme
            </Link>
        </>
    )
}
