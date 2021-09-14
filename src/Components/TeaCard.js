import React from "react";

function TeaCard ({tea}) {
    const {id, name, image, caffeinated, category, rating, description, price, keywords} = tea
    console.log(tea)
    
    return (
        <li>
            
            <img key={id} src={image} alt={name} />
        </li>

    )
}

export default TeaCard