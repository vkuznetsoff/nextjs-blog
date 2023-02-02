import { useRouter } from "next/router"
import { useEffect } from "react"
import Heading from "../components/Heading"

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    console.log("useEffect!")

    setTimeout(() => {
      router.push("/")
    }, 1000)
  }, [router])

  return <Heading text={">No such page!!!"} title={"Error page"} />
}

export default Error
