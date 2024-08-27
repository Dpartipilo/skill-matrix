import { useState } from "react"
import { PositionsLevel } from "../../types"

type CardProps = {
  data: PositionsLevel
}

export const Card = ({data}: CardProps) => {
// const [first, setfirst] = useState(second)
  const skills = data.key_knowledge_and_skills;

  console.log(skills)
  
  for (const [category, skillList] of Object.entries(skills)) {
    console.log(`  ${category.replace(/_/g, ' ').toUpperCase()}:`);
    skillList.forEach((skill: string) => {
      console.log(`    - ${skill}`);
    });
  }

  return (
    <div className="card">
      <div className="level-section">
          <h2>{data.level}</h2>
          <p><strong>Average Salary:</strong> {data.average_salary}</p>
          
          <div className="skills">
            {Object.entries(data.key_knowledge_and_skills).map(([category, skillList], idx) => (
              <div key={idx} className="skill-category">
                <h3>{category.replace(/_/g, ' ').toUpperCase()}</h3>
                <ul>
                  {skillList.map((skill: string, i:number) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

