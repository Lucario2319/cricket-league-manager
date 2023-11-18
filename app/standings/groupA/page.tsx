import Standings from "@/components/tables/standings/standings"
import Link from "next/link"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <nav className="container w-3/5 pt-4">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/tournaments/tournament">
              Tournament Summary
            </Link>
          </li>
          <li>
            <Link href="/teams">
              Team Information
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              Matches Schedule
            </Link>
          </li>
          <li>
            <Link href="/standings/groupA" className="text-violet-700 border-b-4">
              Tournament Standings
            </Link>
          </li>
        </ul>
      </nav>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">Tournament Standings</h1>
      <nav className="container w-1/5">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/standings/groupA" className="text-violet-700 border-b-4">
              Group A
            </Link>
          </li>
          <li>
            <Link href="/standings/groupB">
              Group B
            </Link>
          </li>
        </ul>
      </nav>
      <Standings/>      
    </div>
  )
}

export default page
