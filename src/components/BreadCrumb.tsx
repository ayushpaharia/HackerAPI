import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type BreadCrumbProps = {
  basePath: string
  path: string[]
}

const BreadCrumb: React.FC<any> = ({ basePath, path, className }) => {
  //   const history = useNavigate()
  //   let location = useLocation()

  return (
    <h1
      className={`flex gap-2 mt-[112.75px] font-black text-slate-400 ${className}`}
    >
      {basePath}
      {path!.map((path: string) => {
        return (
          <div key={`-${path}-`} className="inline-flex gap-2">
            <p className="font-normal">{">"}</p>
            {path}
          </div>
        )
      })}
    </h1>
  )
}

export default BreadCrumb
