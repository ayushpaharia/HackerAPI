import { AcademicCapIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="grid w-screen h-screen place-items-center">
      <div className="flex flex-col items-center gap-2 p-16 bg-gray-100 shadow-lg rounded-xl">
        <h2 className="text-xs font-bold tracking-wider uppercase text-slate-400">
          Welcome to
        </h2>
        <h1 className="flex items-center gap-2 text-4xl font-bold text-slate-700">
          <p className="flex items-center gap-2 font-black">
            <AcademicCapIcon className="w-8 h-8 text-emerald-500" />
            HackerAPI
          </p>
        </h1>
        <span className="flex gap-1 mt-4 text-sm text-slate-600">
          Start by visting posts from
          <Link
            className="font-semibold text-blue-500 underline hover:animate-pulse"
            to={"/posts"}
          >
            here
          </Link>
        </span>
      </div>
    </div>
  )
}
export default Home
