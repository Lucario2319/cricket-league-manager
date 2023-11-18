// import DemoPage from "@/components/tables/scorecard/scorecardTable"
import ScoreCard2 from "@/components/tables/scorecard/scorecardTable2"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <nav className="container w-1/5 pt-8">
        <ul className="flex justify-between items-center space-x-2">
          <li>
            <Link href="/scorecard/teamA">
              Team A
            </Link>
          </li>
          <li>
            <Link href="/scorecard/teamB" className="text-violet-700 border-b-4">
              Team B
            </Link>
          </li>
        </ul>
      </nav>
      {/* <DemoPage/>      */}
      <ScoreCard2/>
    </div>
  )
}

export default page
