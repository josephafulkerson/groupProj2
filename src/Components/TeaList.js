import React from 'react'
import TeaCard from './TeaCard'


function TeaList({teas}) {
    return (
        <div className="cards">
            {teas.map((tea) => {
                return(
                    <TeaCard 
                    key={tea.id}
                    tea={tea}/>
                )
            })}
            
        </div>
    )
}

 export default TeaList;