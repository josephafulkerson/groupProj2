import React from 'react'
import TeaCard from './TeaCard'

function TeaList({teas}) {
    return (
        <ul>
            {teas.map((tea) => {
                return(
                    <TeaCard 
                    key={tea.id}
                    tea={tea}/>
                )
            })}
            
        </ul>
    )
}

 export default TeaList;