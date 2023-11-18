import { ScoreCard } from "@/types";

const sample : ScoreCard[] = [
  {
    playerName: "Sachin Tendulkar",
    runScored: 45,
    oversPlayed: 7,
    sixesCount: 1,
    foursCount: 5,
  },
  {
    playerName: "Virat Kohli",
    runScored: 78,
    oversPlayed: 6,
    sixesCount: 2,
    foursCount: 7,
  },
  {
    playerName: "Ricky Ponting",
    runScored: 32,
    oversPlayed: 4,
    sixesCount: 0,
    foursCount: 3,
  },
  {
    playerName: "Kumar Sangakkara",
    runScored: 55,
    oversPlayed: 5,
    sixesCount: 3,
    foursCount: 6,
  },
  {
    playerName: "AB de Villiers",
    runScored: 68,
    oversPlayed: 6,
    sixesCount: 1,
    foursCount: 8,
  },
  {
    playerName: "Jacques Kallis",
    runScored: 42,
    oversPlayed: 4,
    sixesCount: 1,
    foursCount: 4,
  },
  {
    playerName: "Chris Gayle",
    runScored: 9,
    oversPlayed: 2,
    sixesCount: 0,
    foursCount: 1,
  },
  {
    playerName: "Rohit Sharma",
    runScored: 37,
    oversPlayed: 5,
    sixesCount: 1,
    foursCount: 4,
  },
  {
    playerName: "Steve Smith",
    runScored: 81,
    oversPlayed: 8,
    sixesCount: 3,
    foursCount: 8,
  },
  {
    playerName: "David Warner",
    runScored: 63,
    oversPlayed: 7,
    sixesCount: 2,
    foursCount: 7,
  },
  {
    playerName: "Joe Root",
    runScored: 29,
    oversPlayed: 3,
    sixesCount: 0,
    foursCount: 3,
  },
];

function calculateAndAddStrikeRateToData(data: ScoreCard[]): ScoreCard[] {
  const newData = data.map((item) => ({
    ...item,
    strikeRate: ((item.runScored / (item.oversPlayed * 6)) * 100).toFixed(2),
  }));
  return newData;
}

export const sampleData: ScoreCard[] = calculateAndAddStrikeRateToData(sample);
