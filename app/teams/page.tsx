import TeamList from "@/components/displays/teamList"
import Link from "next/link"

const page = () => {
  return (
    <div className="container flex flex-col gap-4">
      <nav className="container w-3/5 pt-8">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/tournaments/tournament">
              Tournament Summary
            </Link>
          </li>
          <li>
            <Link href="/teams"  className="text-violet-700 border-b-4">
              Team Information
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              Matches Schedule
            </Link>
          </li>
          <li>
            <Link href="/standings/groupA">
              Tournament Standings
            </Link>
          </li>
        </ul>
      </nav>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center">Current Teams</h1>
      <TeamList/>      
    </div>
  )
}

export default page
