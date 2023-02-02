import Link from "next/link"
import s from "../styles/Navbar.module.css"

const items = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Posts",
    path: "/posts",
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
  },
]
const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.logo}>
        <img scr="/images/skype.svg" width={60} height={60} alt={"logo"} />
      </div>
      <div className={s.links}>
        {items.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
