import React, {useState} from "react";

function TeaCard ({tea}) {
    const {id, name, image, caffeinated, category, rating, description, price} = tea

    const [details, setDetails] = useState()

    function handleToggleDetails() {
        setDetails((details) => !details);
      }
    
    return (
        <div className="cards">
            
            <img key={id} src={image} alt={name} height="200" width="200" />
            <h2>{name}</h2>
            <h3>{category.toUpperCase()}</h3>
            {caffeinated ? 
            (<h5>Caffeinated</h5>) : 
            (<h5>Decaffeinated</h5>)}
            <p>Rated: {rating}/10</p>
            
            {details ? (
                <button onClick={handleToggleDetails}>
                  {description}<br />${price}
                </button>
              ) : (
                <button onClick={handleToggleDetails}>More Info</button>
              )}

            <button>Add To Cart</button>

        </div>
    )
}

export default TeaCard