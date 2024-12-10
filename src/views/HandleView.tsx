import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"
import { getUserByHandle } from "../api/DevTreeApi"
import HandleData from "../components/HandleData"

export default function HandleView() {
    const params = useParams()
    const handle = params.handle!

    const { data, error, isLoading } = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ["handle", handle],
        retry: 1
    })
   
    if (error) return <Navigate to="/404" />
    if (isLoading) return <p className="font-bold text-center text-white text-2xl">Cargando...</p>  
    if (data) return <HandleData data={data}/>
}