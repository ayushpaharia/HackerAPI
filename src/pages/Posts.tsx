import BreadCrumb from "components/BreadCrumb"
import PostList from "components/PostList"

function Posts() {
  return (
    <div className="flex flex-col h-screen p-10 overflow-x-hidden">
      <BreadCrumb basePath={"Posts"} path={["post"]} />
      <div className="grid place-items-center">
        <PostList />
      </div>
    </div>
  )
}
export default Posts
