// shows a single tournament details

import { Button } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
  return (
    <div className="container flex flex-col gap-4 items-center">
      <nav className="container w-3/5 pt-8">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/tournaments/tournament" className="text-violet-700 border-b-4">
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
            <Link href="/standings/groupA">
              Tournament Standings
            </Link>
          </li>
        </ul>
      </nav>
      {/* Tournament Name */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Cedar Super 10</h1>
      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4 w-3/5">
        <div className="flex justify-between items-center">
          <div>Stadium:</div>
          <div>National Stadium, Karachi</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Overs:</div>
          <div>50</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Starting At:</div>
          <div>23rd October, 2023</div>
        </div>
        <div className="flex justify-between items-center">
          <Button>View Teams</Button>
          <Button>Create Team</Button>
        </div>
      </div>
      
    </div>
  )
}

export default page
