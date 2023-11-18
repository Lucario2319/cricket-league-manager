import { Standings } from "@/types";

const sample : Standings[] = [
  {
    teamName: "Pakistan",
    Wins: 3,
    Loss: 1,
    Ties:0,
    Points:0,
    NRR: 1.752,
  },
  {
    teamName: "South Africa",
    Wins: 1,
    Loss: 2,
    Ties:1,
    NRR: -0.742,
    Points:0,
  },
  {
    teamName: "Afghanistan",
    Wins: 1,
    Loss: 3,
    Ties:0,
    NRR: -1.201,
    Points:0,
  },
  {
    teamName: "Australia",
    Wins: 2,
    Loss: 1,
    Ties:1,
    Points:0,
    NRR: 0.912,
  },
  {
    teamName: "India",
    Wins: 3,
    Loss: 1,
    Ties:0,
    Points:0,
    NRR: 1.252,
  },
  // {
  //   teamName: "Quetta Gladiators",
  //   Wins: 3,
  //   Loss: 1,
  //   Ties:0,
  //   Points:0,
  //   NRR: 1.752,
  // },
  // {
  //   teamName: "Gilgit Knights",
  //   Wins: 3,
  //   Loss: 1,
  //   Ties:0,
  //   Points:0,
  //   NRR: 1.752,
  // },
  // {
  //   teamName: "Hyderabad Tigers",
  //   Wins: 3,
  //   Loss: 1,
  //   Ties:0,
  //   Points:0,
  //   NRR: 1.752,
  // },
];

function calculateAndAddpointsRateToData(data: Standings[]): Standings[] {
  const newData = data.map((item) => ({
    ...item,
    Points: item.Wins*2 + item.Ties,
  }));
  return newData;
}


function sortTeamsByPointsAndNRR(teams: Standings[]): Standings[] {
  // First, sort by points in descending order
  teams.sort((a, b) => {
    if (a.Points !== b.Points) {
      return b.Points - a.Points;
    } else {
      // If points are the same, sort by NRR in descending order
      return b.NRR - a.NRR;
    }
  });

  return teams;
}

// const sampleData: Standings[] = calculateAndAddpointsRateToData(sample);

export const sampleData: Standings[] = sortTeamsByPointsAndNRR(calculateAndAddpointsRateToData(sample));
