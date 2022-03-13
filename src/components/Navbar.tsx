import { NavLink } from "react-router-dom"
import { AcademicCapIcon, SearchIcon } from "@heroicons/react/solid"

import { useAppDispatch, useAppSelector } from "redux/hooks"
import { searchInputChange } from "redux/searchInputSlice"

const Navbar = () => {
  const { searchInput } = useAppSelector(({ searchInput }) => searchInput)
  const dispatch = useAppDispatch()

  return (
    <div className="absolute top-0 z-50 flex items-center justify-between w-screen gap-10 p-8 text-xl font-black bg-white border-b-2 bg-opacity-80">
      {/* Logo */}

      <div className="flex items-center gap-1 text-slate-700">
        <AcademicCapIcon className="w-5 h-5 text-emerald-500" /> HackerAPI
      </div>

      {/* SeachBar */}
      <div className="relative flex items-center w-1/3 bg-gray-100 rounded-full ">
        <input
          className="w-full px-8 py-3 text-sm bg-gray-100 rounded-full outline-none"
          type="text"
          placeholder="Search Hacker News API"
          value={searchInput}
          onChange={(e) => {
            dispatch(searchInputChange(e.target.value))
          }}
        />
        <button className="absolute flex right-8">
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex gap-10 text-slate-700">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  )
}

export default Navbar
