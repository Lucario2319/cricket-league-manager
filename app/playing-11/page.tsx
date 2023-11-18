import Playing from "@/components/tables/playing/playing"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">Playing 11</h1>
      <Playing/>
    </div>
  )
}

export default page
