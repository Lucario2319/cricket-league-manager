// tournamentName, stadiumName, startingDate, overs
import { TournamentType } from "@/types"
const Tournament = ({tournamentName, stadiumName, startingDate, overs, status}: TournamentType) => {
  return (
    // <div className={`${status === 'finished' ? 'bg-slate-200' : status == 'ongoing' ? 'bg-slate-500': 'bg-violet-700'}`}>
    //   <h2>{tournamentName}</h2>
    //   <div>{stadiumName}</div>
    //   <div>{startingDate}</div>
    //   <div>{overs}</div>
    // </div> 
    <div className={`border py-6 px-4 rounded-lg flex flex-col gap-4 ${status === 'finished' ? 'text-slate-400' : status == 'ongoing' ? 'text-slate-700': 'text-violet-700'}`}>
      <div className="font-semibold flex justify-between items-center">
        <div>Name</div>
        <div>{tournamentName}</div>
      </div>
      <div className="font-light text-sm flex justify-between items-center gap-16">
        <div>Stadium</div>
        <div>{stadiumName}</div>
      </div>
      <div className="font-light text-sm flex justify-between items-center gap-16">
        <div>{status === 'upcoming' ? 'Will Start On' : 'Started At'}</div>
        <div>{startingDate}</div>
      </div>
      <div className="font-light text-sm flex justify-between items-center gap-16">
        <div>Overs</div>
        <div>{overs}</div>
      </div>
      <div className="font-light text-sm flex justify-between items-center gap-16">
        <div>Status</div>
        <div>{status}</div>
      </div>

    </div>
  )
}

const TournamentList = () => {
  return (

    
    <div className="flex justify-between items-center gap-8 my-4">
    <Tournament 
      tournamentName='Pindi Warriors League'
      stadiumName='Rawalpindi Stadium'
      startingDate='2023-10-01'
      overs={50}
      status='finished'
    />
    <Tournament 
      tournamentName='Nazimabad League'
      stadiumName='North Nazimabad Stadium'
      startingDate='2023-11-15'
      overs={40}
      status='ongoing'
    />
    <Tournament 
      tournamentName='Quetta League'
      stadiumName='Loralei Stadium'
      startingDate='2024-02-28'
      overs={60}
      status='upcoming'
      />
  </div>
  )
}

export default TournamentList
