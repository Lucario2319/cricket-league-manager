// import Navbar from "@/components/navbars/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="text-5xl text-center mt-4">Scorecard</h1>
      {/* <Navbar/> */}
      {children}
    </div>
  )
}
