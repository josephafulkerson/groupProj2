import React from "react";

function TeaCard ({tea}) {
    const {id, name, image, caffeinated, category, rating, description, price, keywords} = tea

    
    return (
        <li>
            <img key={id} src={image} alt={name} height="100" width="100"/>
            <h3>{name}</h3>
            <p>{category}</p>
            {caffeinated ? 
            (<h4>"Caffein"</h4>) : 
            (<h4>"Decaff"</h4>)}
            <p>{rating}</p>
        </li>

    )
}

export default TeaCard