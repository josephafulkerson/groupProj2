import React from 'react';
import TeaCard from './TeaCard';


function TeaList({teas, handleAddCart, cartItems, fetchSwitch, setFetchSwitch}) {

    return (
        <div className="cardsLayout">
            {teas.map((tea) => {
                return(
                    <TeaCard 
                    key={tea.id}
                    tea={tea}
                    handleAddCart={handleAddCart}
                    cartItems={cartItems}
                    fetchSwitch={fetchSwitch} 
                    setFetchSwitch={setFetchSwitch}
                    />
                )
            })}
        </div>
    )
}

export default TeaList;