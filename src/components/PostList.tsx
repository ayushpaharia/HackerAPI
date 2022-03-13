import { useEffect, useLayoutEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import Masonry from "react-masonry-css"

import PostCard from "components/PostCard"
import { useAppSelector } from "redux/hooks"
import { useDebounce, usePosts } from "helpers"

const breakpointColumns = {
  default: 3,
  1440: 3,
  1024: 2,
  768: 1,
}

function PostList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { searchInput } = useAppSelector(({ searchInput }) => searchInput)
  const debouncedSearchQuery = useDebounce(searchInput, 700)

  const { status, data, error, isFetching } = usePosts(
    searchParams.get("q") as string,
    1,
  )

  useLayoutEffect(() => {
    setSearchParams({ q: searchInput })
  }, [debouncedSearchQuery])

  return (
    <div className="mt-10">
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          {data.hits?.map((item: any, idx: number) => (
            <PostCard item={item} idx={idx} />
          ))}
        </Masonry>
      )}
    </div>
  )
}

export default PostList
