"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ScoreCard } from "@/types"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<ScoreCard>[] = [
  // {
  //   accessorKey: "teamName",
  //   header: "Team",
  // },
  {
    accessorKey: "playerName",
    header: "Name",
  },
  {
    accessorKey: "runScored",
    header: "Runs Scored",
  },
  {
    accessorKey: "oversPlayed",
    header: "Overs Played",
  },
  // {
  //   accessorKey: "oversDelivered",
  //   header: "Overs Delivered",
  // },
  // {
  //   accessorKey: "wicketsTaken",
  //   header: "Wickets",
  // },
  {
    accessorKey: "sixesCount",
    header: "Sixes (6s)",
  },
  {
    accessorKey: "foursCount",
    header: "Fours (4s)",
  },
  {
    accessorKey: "strikeRate",
    header: "Strike Rate",
  },
]
