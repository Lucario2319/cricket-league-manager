import { CreateTeam } from "@/components/forms/create-team-form"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Team Creation</h1>
      <CreateTeam/>
    </div>
  )
}

export default page
