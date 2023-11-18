import { UpdateForm } from "@/components/forms/update-form"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Update Information</h1>
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium mt-4">Babar Azam</h2>
      <UpdateForm/>      
    </div>
  )
}

export default page
