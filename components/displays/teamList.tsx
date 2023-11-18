import TeamPlayers from "./teamPlayers"

const TeamList = () => {
  const team = "Pakistan";
  const cap = "Babar Azam";

  const players:string[] = ["Muhammad Rizwan", "Imam-ul-Haq", "Iftikhar Thakur", "Sarfaraz Ahmed", "Shadab Khan", "Naseem Shah", "Muhammad Amir", "Shaheen Afridi", "Zaman Khan",
  ];

  const reserves:string[] = [
    "Fakhar Zaman", 
    "Hassan Ali", 
    "Rumman Raees",
  ];

  const indianPlayers: string[] = [
    'Virat Kohli',
    'Jasprit Bumrah',
    'Shikhar Dhawan',
    'Ravindra Jadeja',
    'KL Rahul',
    'Cheteshwar Pujara',
    'Ajinkya Rahane',
  ];

  const indianReservePlayers: string[] = [
    'Mayank Agarwal',
    'Hanuma Vihari',
  ];

  const australianPlayers: string[] = [
    'Steve Smith',
    'Pat Cummins',
    'Mitchell Starc',
    'Josh Hazlewood',
    'Marnus Labuschagne',
    'Travis Head',
    'Tim Paine',
    'Nathan Lyon',
    'Matthew Wade',
    'Cameron Green',
  ];

  return (
    <div className="gap-4 container grid grid-cols-3 items-center justify-between mt-4">
      <TeamPlayers
        team={team}
        cap={cap}
        players={players}
        reserves={reserves}
      />
      <TeamPlayers
        team="Australia"
        cap='David Warner'
        players={australianPlayers}
        reserves={[]}
      />
      <TeamPlayers
        team="India"
        cap='Rohit Sharma'
        players={indianPlayers}
        reserves={indianReservePlayers}
      />
    </div>
  )
}

export default TeamList
