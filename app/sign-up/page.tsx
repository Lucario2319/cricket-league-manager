import { SignupForm } from "@/components/forms/signup-form"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Player Registration</h1>
      <SignupForm/>      
    </div>
  )
}

export default page
