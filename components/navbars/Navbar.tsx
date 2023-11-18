import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li>
          <Link href="/scorecard" className="active:bg-violet-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/scorecard/teamA" className="active:bg-violet-700">
            Team A
          </Link>
        </li>
        <li>
          <Link href="/scorecard/teamB" className="active:bg-violet-700">
            Team B
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
