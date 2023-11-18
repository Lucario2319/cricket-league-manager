export type ScoreCard = {
  // teamName:"team A" | "team B", 
  playerName:string, 
  runScored:number, 
  oversPlayed: number, 
  // oversDelivered: number, 
  // wicketsTaken: number,
  sixesCount: number,
  foursCount: number,
  strikeRate?:string,
}

export type Standings = {
  teamName:string,
  Wins:number,
  Loss:number,
  Ties:number,
  Points:number,
  NRR:number,
}

export type TournamentType = {
  tournamentName: string,
  stadiumName: string,
  startingDate: string,
  overs: number,
  status: 'finished' | 'ongoing' | 'upcoming'
}

export type TournamentArray = {
  tournaments: TournamentType[]
}

export type Request = {
  name: string,
  role:string,
  matchesPlayed: number
}

export type PlayingProps = {
  name: string,
  role: string,
  status: "Playing 11" | "Reserve Player",
}

export type AnalysisBat = {
  teamName:string, 
  playerName:string, 
  runScored:number, 
  oversPlayed: number, 
  sixesCount: number,
  foursCount: number,
  strikeRate?:string,
}
export type AnalysisBall = {
  teamName:string, 
  playerName:string, 
  oversDelivered: number, 
  wicketsTaken: number,
  HattrickCount: number,
  economy?:string,
}