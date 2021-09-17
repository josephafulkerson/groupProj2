import React, {useState} from "react";

function TeaCard ({ tea, teas, handleAddCart, fetchSwitch, setFetchSwitch }) {
    const {id, name, image, caffeinated, category, rating, description, price} = tea;

    const [details, setDetails] = useState();
    const [isAddRating, setIsAddRating] = useState(false);
    const [userRating, setUserRating] = useState(rating);
    const [avgUserRating, setAvgUserRating] = useState(userRating)

    function handleToggleDetails() {
        setDetails((details) => !details);
    }

    function averageButton() {
      setIsAddRating((isAddRating) => !isAddRating);
    }

    function updateRating(e) {
      e.preventDefault()
      setAvgUserRating(((parseFloat(userRating) + parseFloat(rating)) / 2).toFixed(1))
      console.log(userRating)
      ratingPatch()
      setIsAddRating(!isAddRating)
    }

    function handleFormChange(e) {  
      setUserRating(e.target.value)
    }

    function ratingPatch() {
      fetch(`http://localhost:8000/teas/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify({...tea, rating: avgUserRating})
      }) 
        .then(r => r.json())
        .then(data => {
          console.log(data)
          setFetchSwitch(!fetchSwitch)
      })
  }
    
    return (
        <div className="teaCards">
            <img key={id} src={image} alt={name} height="200" width="200" />
            <h3>{name}</h3>
            <p>{category.toUpperCase()}</p>
            {caffeinated ? 
              (<h5>Caffeinated</h5>) : 
              (<h5>Decaffeinated</h5>)}
            {isAddRating && (
              <form onSubmit={updateRating}>
                <input
                  onChange={handleFormChange}
                  type="number"
                  max="10"
                  min="0"
                  value={userRating}
                  step="0.1">
                </input>
                <button type='submit'>Rate!</button>
              </form>
            )}
            <p>Rated: {avgUserRating}/10</p>
            <button onClick={averageButton}> Add rating </button>

            
            {details ? (
                <button onClick={handleToggleDetails}>
                  {description}<br /><br />${price}/ounce<br /><br /> Click again to close
                </button>
              ) : (
                <button onClick={handleToggleDetails}>More Info</button>
              )}
            <br /><br />
            <button onClick={()=>handleAddCart(tea)}> Add To Cart </button>
        </div>
    );
}

export default TeaCard