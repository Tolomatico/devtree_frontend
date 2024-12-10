import { ChangeEvent, useEffect, useState } from "react"
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput"
import { isValidURL } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../api/DevTreeApi"
import { User, SocialNetwork } from "../types"

export default function LinkTreeview() {

  const [devTreeLinks, setDevTreeLinks] = useState(social)
  const queryClient = useQueryClient()
  const user: User = queryClient.getQueryData(["user"])!

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prevLinks = devTreeLinks.map(link =>
      link.name === e.target.name ?
        { ...link, url: e.target.value } : link)
    setDevTreeLinks(prevLinks)
    queryClient.setQueryData(["user"], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(prevLinks)
      }
    }

    )
  }



  const handleEnableLinks = (socialNetwork: string) => {
    const prevLinks = devTreeLinks.map(link => {
      if (link.name === socialNetwork) {
        if (isValidURL(link.url)) {
          return { ...link, enabled: !link.enabled }
        } else {
          toast.error("Url no válida")
        }


      }
      return link

    })
    setDevTreeLinks(prevLinks)
    queryClient.setQueryData(["user"], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(prevLinks)
      }
    }

    )
  }





  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("Actualizado Correctamente")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  useEffect(() => {
    const updateData = devTreeLinks.map(item => {

      const userLink = JSON.parse(user.links).find((link: SocialNetwork) => link.name === item.name)
      if (userLink) {
        return {
          ...item, url: userLink.url, enabled: userLink.enabled
        }
      }
      return item
    }
    )

    setDevTreeLinks(updateData)

  }, [user])

  return (
    <div className="space-y-5">
      {
        devTreeLinks.map(item => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnableLinks={handleEnableLinks}
          />
        ))
      }
      <button
        onClick={() => mutate(user)}
        className="font-bold bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg">
        Guardar Cambios</button>
    </div>
  )
}
