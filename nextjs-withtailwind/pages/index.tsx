import Navbar from "@components/home/Navbar"
import Sidebar from "@components/home/Sidebar"
import Head from "next/head"

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen bg-gradient-to-b from-neutral-focus via-neutral to-spotifyBlack">
      <Head>
        <title>Spotify</title>
      </Head>
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main className="p-8 text-white">Hellow</main>
      </div>
    </div>
  )
}

export default Home
