import Comment from "components/Comment"
import { useState } from "react"

const CommentList: React.FC<any> = ({ comments }) => {
  const ALL_OFF_ACCORDIONS = Array(comments.length).fill(false)

  const [expandedArray, setExpandedArray] = useState(ALL_OFF_ACCORDIONS)

  const toggleAccordion = (idx: number) => {
    setExpandedArray((prev) =>
      prev.map((item, i) => (i === idx ? !item : false)),
    )
  }

  return (
    <div className="flex flex-col items-center ">
      {comments.map((comment: any, i: number) => {
        return (
          <Comment
            idx={i}
            comment={comment}
            isExpanded={expandedArray[i]}
            toggleAccordion={toggleAccordion}
          />
        )
      })}
    </div>
  )
}

export default CommentList
