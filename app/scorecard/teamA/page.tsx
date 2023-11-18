import DemoPage from "@/components/tables/scorecard/scorecardTable"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <nav className="container w-1/5 pt-8">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/scorecard/teamA" className="text-violet-700 border-b-4">
              Team A
            </Link>
          </li>
          <li>
            <Link href="/scorecard/teamB">
              Team B
            </Link>
          </li>
        </ul>
      </nav>
      <DemoPage/>     
    </div>
  )
}

export default page
