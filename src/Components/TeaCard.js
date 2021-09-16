import React, {useState} from "react";

function TeaCard ({tea, handleAddCart}) {
    const {id, name, image, caffeinated, category, rating, description, price} = tea

    const [details, setDetails] = useState()

    function handleToggleDetails() {
        setDetails((details) => !details);
      }

    
    return (
        <div className="teaCards">
            
            <img key={id} src={image} alt={name} height="200" width="200" />
            <h2>{name}</h2>
            <h3>{category.toUpperCase()}</h3>
            {caffeinated ? 
            (<h5>Caffeinated</h5>) : 
            (<h5>Decaffeinated</h5>)}
            <p>Rated: {rating}/10</p>
            
            {details ? (
                <button onClick={handleToggleDetails}>
                  {description}<br /><br />${price}/ounce<br /><br /> Click again to close
                </button>
              ) : (
                <button onClick={handleToggleDetails}>More Info</button>
              )}
            <br /><br />
            <button onClick={()=>handleAddCart(tea)}>Add To Cart</button>
        </div>
    )
}

export default TeaCard