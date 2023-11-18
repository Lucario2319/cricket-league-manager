"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Standings } from "@/types"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Standings>[] = [
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "Wins",
    header: "Wins",
  },
  {
    accessorKey: "Loss",
    header: "Loss",
  },
  {
    accessorKey: "Ties",
    header: "Ties",
  },
  {
    accessorKey: "Points",
    header: "Points",
  },
  {
    accessorKey: "NRR",
    header: "NRR",
  },
]
