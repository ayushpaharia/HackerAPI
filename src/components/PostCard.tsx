import { ExternalLinkIcon } from "@heroicons/react/solid"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"

import { PostType } from "types"

type PostCardProps = {
  item: PostType
  idx: number
}

const PostCard: React.FC<PostCardProps> = ({ item, idx }) => {
  return (
    <div key={idx} className="flex flex-col p-6 bg-gray-100 rounded-md">
      <Link to={`/posts/${item.objectID}`} className="flex flex-col gap-4">
        <span className="flex justify-between">
          <h4 className="text-xs font-bold text-slate-800">
            {item.title === null ? "An interesting post..." : item.title}
          </h4>
          <a
            href={item.url}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon className="w-5 h-5 text-slate-500" />
          </a>
        </span>
        <span className="font-bold text-slate-900">{item.points} points</span>
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black text-slate-400">
            by {item.author}
          </p>
          <p className="text-[10px] font-black text-slate-400">
            {moment(item.created_at).fromNow()}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
