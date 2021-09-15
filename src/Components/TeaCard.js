import React from "react";

function TeaCard ({tea}) {
    const {id, name, image, caffeinated, category, rating, description, price, keywords} = tea

    
    return (
        <div className="cards">
            <img key={id} src={image} alt={name} height="100" width="100"/>
            <h2>{name}</h2>
            <h4>{category.toUpperCase()}</h4>
            {caffeinated ? 
            (<h5>Caffeinated</h5>) : 
            (<h5>Decaffeinated</h5>)}
            <p>Rated: {rating}/10</p>
            <button>Add To Cart</button>
        </div>

    )
}

export default TeaCard