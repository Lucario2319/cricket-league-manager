import AnalysisBat from "@/components/tables/analysis/analysis"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">Tournament Analysis</h1>
      <AnalysisBat/>
    </div>
  )
}

export default page
