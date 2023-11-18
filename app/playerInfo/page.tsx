import PlayerInfo from "@/components/displays/playerInfo"

const page = () => {
  return (
    <div className="container mt-4 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Player Information</h1>
      <PlayerInfo/>
    </div>
  )
}

export default page
