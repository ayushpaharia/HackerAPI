declare module "react-masonry-grid"

export type PostsResponse = {
  hits: PostsType[]
}
export type PostResponse = PostType & {
  children: CommentType[]
}

export type CommentType = {
  id: string
  author: string
  children: CommentType[]
  text: string
}

export type PostType = {
  objectID: string
  title: string
  url: string
  points: number
  author: string
  created_at: string
}

export type PostsType = ReadonlyArray<Post>
