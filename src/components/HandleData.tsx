import { SocialNetwork, UserHandle } from "../types"

type HandleDataProps = {
    data: UserHandle
}
export default function HandleData({ data }: HandleDataProps) {


    const links: SocialNetwork[] = JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled === true)
    console.log(links)
    return (
        <div className="space-y-6 text-white">
            <p className="text-5xl text-center font-black  ">{data.handle}</p>
            {
                data.image && <img
                    src={data.image}
                    alt="user image"
                    className="max-w-[250px] mx-auto"
                />
            }
            <p className="text-lg text-center font-black  ">{data.description}</p>


            <div className="mt-20 flex flex-col gap-6">
                {

                    links.length ? links.map(link => (
                        <a
                            key={link.name}
                            className="text-center bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img  className="w-12" src={`/social/icon_${link.name}.svg`} alt="image social network" />
                            <p className="text-black capitalize font-bold text-center">
                                Visita mi: {link.name}</p>
                        </a>
                    )) :
                        <p className="text-center">No hay enlaces en este perfil</p>

                }
            </div>


        </div>
    )
}
