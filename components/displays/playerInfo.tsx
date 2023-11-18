
type Dictionary = Record<string, string>;

interface DictionaryDisplayProps {
  dictionary: Dictionary;
}

const DictionaryDisplay: React.FC<DictionaryDisplayProps> = ({ dictionary }) => {
  return (
    <div className="w-4/5 container flex flex-col my-2">
      {Object.entries(dictionary).map(([key, value], index) => (
        <div key={key} className={`p-2 flex items-center justify-between ${index % 2 ? "bg-slate-200" : "bg-slate-50"}`}>
          <div className="font-medium">{key.split('_').join(' ')}</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};

const PlayerInfo = () => {
  const dictionary = {
    Name: 'Babar Azam',
    Role: 'Right-Handed Batsman',
    Date_Of_Birth: '1994-10-15',
    Highest_Score: '120', 
    Total_Runs_Scored: '1208', 
    Total_Overs_Played: '180', 
    Centuries: '5', 
    Fifties: '16', 
    Fours: '122', 
    Sixes: '47', 
    Highest_Wicket_Haul: '0', 
    Total_Overs_Delivered: '0', 
    Total_Wickets_Taken: '0', 
    Man_Of_The_Match_Awards: '6', 
    Best_Fielder_Awards: '1', 
    Hattrick_Awards: '0', 
    Fastest_Fifty_Awards: '0',
  };

  return (
    <DictionaryDisplay dictionary={dictionary} />
  )
}

export default PlayerInfo
