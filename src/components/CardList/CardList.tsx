import { Card } from '../Card/Card';
import { frontendDeveloperProgression } from '../../data';
import { PositionsLevel } from '../../types';

export const CardList = () => {
  return (
    <div className='card-list'>
      {frontendDeveloperProgression.map((data: PositionsLevel)=>(
        <Card data={data}/>
      ))}
      
      
      </div>
  )
}
