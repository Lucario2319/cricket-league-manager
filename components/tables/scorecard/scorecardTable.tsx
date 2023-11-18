import { ScoreCard } from "@/types";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { sampleData } from "./sampleData"

async function getData(): Promise<ScoreCard[]> {
  // Fetch data from your API here.
  return sampleData;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
