import Heading from "./Heading"
import Image from "next/image"
import footerIgm from "../public/footer.png"

const Footer = () => {
  return (
    <footer>
      <Heading tag="h3" text={"Created by V.K."} />
      <Image src={footerIgm} alt="footer" placeholder="blur" height={250} />
    </footer>
  )
}

export default Footer
