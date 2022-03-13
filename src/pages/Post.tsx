import { useLocation } from "react-router-dom"
import axios from "axios"

import BreadCrumb from "components/BreadCrumb"
import { PostResponse } from "types"
import { useQuery } from "react-query"
import { GlobeIcon } from "@heroicons/react/solid"
import CommentList from "components/CommentList"

const fetchPost = async (id: string) => {
  const { data } = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
  return data
}

export const Post = () => {
  let location = useLocation()
  const id = location.pathname.split("/").at(-1)!

  const { status, data, error, isFetching } = useQuery<PostResponse, Error>(
    ["get-posts", id],
    () => fetchPost(id),
    { staleTime: 5000 },
  )

  return (
    <div className="flex flex-col h-screen p-10 overflow-x-hidden">
      <BreadCrumb basePath={"Posts"} path={[id]} />
      {isFetching ? (
        <div className="grid h-full place-items-center">
          <span className="flex items-center space-x-2">
            <p className="text-3xl">Loading</p>
            <GlobeIcon className="w-10 animate-spin text-emerald-500" />
          </span>
        </div>
      ) : !data ? (
        <h1 className="flex justify-center mt-10">Data not found</h1>
      ) : (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center">
            <h1
              className="text-4xl font-bold text-center cursor-pointer text-slate-800"
              onClick={() => {
                console.log(data)
              }}
            >
              {data.title}
            </h1>
            <h6 className="mt-6 font-black text-slate-400">By {data.author}</h6>
            <div className="flex justify-between w-full font-semibold text-slate-500">
              <div>
                Points:{" "}
                <span className="text-white bg-amber-500 p-[3px]">
                  {data.points || 0}
                </span>
              </div>
              <div>
                Comments:{" "}
                <span className="text-white bg-purple-500 p-[3px]">
                  {data.children.length || 0}
                </span>
              </div>
            </div>
            <div className="w-full px-6 py-4 mt-10 text-gray-500 bg-gray-100 rounded-full">
              Comments
            </div>
            <CommentList comments={data.children} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
