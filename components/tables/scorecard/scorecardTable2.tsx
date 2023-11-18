import { ScoreCard } from "@/types";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { sampleData } from "./sampleData2"

async function getData(): Promise<ScoreCard[]> {
  // Fetch data from your API here.
  return sampleData;
}

export default async function ScoreCard2() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
