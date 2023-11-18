import { PerformanceForm } from "@/components/forms/performance-form"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Add Player Performance</h1>
      <div className="flex items-center justify-between gap-8 my-2">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium">Nazimabad League</h2>
        <div className="text-sm font-light">Match 4, Lyari Tigers</div>
      </div>
      < PerformanceForm/>      
    </div>
  )
}

export default page
