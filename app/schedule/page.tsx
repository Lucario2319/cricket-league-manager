import Link from "next/link"

const page = () => {
  return (
  <div className="container flex flex-col gap-4 items-center">
    <nav className="container w-3/5 pt-8">
      <ul className="flex justify-between items-center space-x-2">
        <li>
          <Link href="/tournaments/tournament" >
            Tournament Summary
          </Link>
        </li>
        <li>
          <Link href="/teams">
            Team Information
          </Link>
        </li>
        <li>
          <Link href="/schedule" className="text-violet-700 border-b-4">
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
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Matches Schedule</h1>

    <div className="flex justify-between items-center gap-4">
  
      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 1</div>
          <div>23rd October, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Pakistan</div>
          <div>vs</div>
          <div>Australia</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 2</div>
          <div>25th October, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>India</div>
          <div>vs</div>
          <div>South Africa</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 3</div>
          <div>27th October, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Pakistan</div>
          <div>vs</div>
          <div>Afghanistan</div>
        </div>
      </div>
    
    </div>

    <div className="flex justify-between items-center gap-4">
  
      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 4</div>
          <div>29th October, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>India</div>
          <div>vs</div>
          <div>Australia</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 5</div>
          <div>31st October, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Afghanistan</div>
          <div>vs</div>
          <div>South Africa</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 6</div>
          <div>2nd November, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>India</div>
          <div>vs</div>
          <div>South Africa</div>
        </div>
      </div>
    
    </div>

    <div className="flex justify-between items-center gap-4">
  
      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 7</div>
          <div>4th November, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Afghanistan</div>
          <div>vs</div>
          <div>Australia</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 8</div>
          <div>6th November, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Pakistan</div>
          <div>vs</div>
          <div>India</div>
        </div>
      </div>

      <div className="border py-6 px-4 rounded-lg flex flex-col gap-4">
        <div className="font-light text-sm flex justify-between items-center gap-16">
          <div>Match 9</div>
          <div>8th November, 2023</div>
        </div>
        <div className="font-semibold flex justify-between items-center">
          <div>Australia</div>
          <div>vs</div>
          <div>South Africa</div>
        </div>
      </div>
    
    </div>
    
  </div>      
)
}

export default page
