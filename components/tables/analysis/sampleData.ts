import { AnalysisBat } from "@/types";

const secondSampleData: AnalysisBat[] = [
  {
    teamName:"Pakistan",
    playerName: "Babar Azam",
    runScored: 22,
    oversPlayed: 3,
    sixesCount: 1,
    foursCount: 2,
  },
  {
    teamName:"Pakistan",
    playerName: "Fakhar Zaman",
    runScored: 10,
    oversPlayed: 2,
    sixesCount: 0,
    foursCount: 1,
  },
  {
    teamName:"Pakistan",
    playerName: "Imam-ul-Haq",
    runScored: 37,
    oversPlayed: 4,
    sixesCount: 2,
    foursCount: 5,
  },
  {
    teamName:"Pakistan",
    playerName: "Mohammad Hafeez",
    runScored: 14,
    oversPlayed: 2,
    sixesCount: 0,
    foursCount: 2,
  },
  {
    teamName:"Pakistan",
    playerName: "Asif Ali",
    runScored: 50,
    oversPlayed: 6,
    sixesCount: 3,
    foursCount: 7,
  },
  {
    teamName:"India",
    playerName: "Sarfaraz Ahmed",
    runScored: 8,
    oversPlayed: 1,
    sixesCount: 0,
    foursCount: 0,
  },
  {
    teamName:"India",
    playerName: "Shadab Khan",
    runScored: 0,
    oversPlayed: 0,
    sixesCount: 0,
    foursCount: 0,
  },
  {
    teamName:"India",
    playerName: "Shoaib Malik",
    runScored: 0,
    oversPlayed: 0,
    sixesCount: 0,
    foursCount: 0,
  },
  {
    teamName:"Australia",
    playerName: "Azhar Ali",
    runScored: 0,
    oversPlayed: 0,
    sixesCount: 0,
    foursCount: 0,
  },
  {
    teamName:"Australia",
    playerName: "Haris Sohail",
    runScored: 0,
    oversPlayed: 0,
    sixesCount: 0,
    foursCount: 0,
  },
  {
    teamName:"Australia",
    playerName: "Iftikhar Ahmed",
    runScored: 0,
    oversPlayed: 0,
    sixesCount: 0,
    foursCount: 0,
  },
];

function calculateAndAddStrikeRateToData(data: AnalysisBat[]): AnalysisBat[] {
  const newData = data.map((item) => ({
    ...item,
    strikeRate: ((item.runScored / (item.oversPlayed * 6)) * 100).toFixed(2),
  }));
  return newData;
}

export const sampleData: AnalysisBat[] = calculateAndAddStrikeRateToData(secondSampleData);
