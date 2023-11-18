import { Request } from "@/types";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { sample } from "./sampleData"

async function getData(): Promise<Request[]> {
  // Fetch data from your API here.
  return sample;
}

export default async function Requests() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
