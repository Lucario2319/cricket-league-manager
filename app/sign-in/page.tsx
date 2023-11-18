import { SigninForm } from "@/components/forms/signin-form"

const page = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sign In</h1>
      <SigninForm/>
    </div>
  )
}

export default page
