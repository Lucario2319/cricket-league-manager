// show a block of a single team, each player in a single column, Captain on top, reserves on bottom, players in between
// button to send join request and for join reserves, both disabled if limit reached 

import { Button } from "@/components/ui/button";

type TournamentComponentProps = {
  team: string;
  cap: string;
  players: string[];
  reserves: string[];
};

const TeamPlayers : React.FC<TournamentComponentProps> = ({
    team,  
    cap,
    players,
    reserves,
  }) => {
  
  // const cap = "Babar Azam";

//   const players = ["Muhammad Rizwan", "Imam-ul-Haq", "Iftikhar Thakur", "Sarfaraz Ahmed", "Shadab Khan", "Naseem Shah", "Muhammad Amir", "Shaheen Afridi",
// "Asif Ali",
// "Zaman Khan",
// ];

//   const reserves = [
//     "Fakhar Zaman", 
//   "Hassan Ali", 
//   "Rumman Raees",
// ];
  
  return (
    <div className="border rounded-lg flex flex-col">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-2">{team}</h1>
      <div className="flex flex-col justify-between py-2">
        <div className="font-medium flex items-center justify-between mx-2">
          <div>Captain</div>
          <div>{cap}</div>
        </div>
        {players.map((player) => (
          <div key={player} className="flex items-center justify-between mx-2">
            <div>Player</div>
            <div>{player}</div>
          </div>
        ))}
        {reserves.map((reserve) => (
          <div key={reserve} className="font-light flex items-center justify-between mx-2">
            <div>Reserve</div>
            <div>{reserve}</div>
            </div>
        ))}
      </div>
      <div className="flex justify-between items-center m-2">
        <Button 
        variant={`${reserves.length === 3 ? 'ghost' : 'secondary'}`} 
        disabled={reserves.length === 3}
        >
          Join Reserves
        </Button>
        <Button
        variant={`${players.length === 3 ? 'outline' : 'default'}`} 
        disabled={players.length === 10}
        >
          Join Team
        </Button>
      </div>
    </div>
  )
}

export default TeamPlayers
