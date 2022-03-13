import { useQuery } from "react-query"
import axios from "axios"

import { PostsType, PostsResponse } from "types"
import { useEffect, useState } from "react"

const fetchPosts = async (
  searchQuery: string,
  page: number,
): Promise<PostsResponse> => {
  const url = `http://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`
  const { data } = await axios.get(url)
  return data
}

const usePosts = (searchQuery: string, page: number) => {
  const [posts, setPosts] = useState<PostsType>([])
  const { status, data, error, isFetching } = useQuery<PostsResponse, Error>(
    ["get-posts", searchQuery, page],
    () => fetchPosts(searchQuery, page),
    { staleTime: 5000 },
  )

  useEffect(() => {
    setPosts(data?.hits || [])
  }, [data])

  return { status, data: { hits: posts }, error, isFetching }
}

export default usePosts
