import { PositionsLevel } from "../../types"

type CardProps = {
  data: PositionsLevel
}

export const Card = ({data}: CardProps) => {
  return (
    <div className="card">
      <h2>
      {data.level}
      </h2>
    </div>
  )
}
