import React, {useState, useEffect} from 'react'
import TeaList from './TeaList';

function TeaPage () {
    const [teas, setTeas] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/teas')
            .then((r) => r.json())
            .then(setTeas);
        }, []);

    return (
        <div>
            {/* <h1>House Tea Made Locally</h1> */}
            <br />
             {/* <Search /> */}
<<<<<<< HEAD
             <br />
             <TeaList itemsPerRow={6}
             teas={teas}/>
=======
            <br />
            <TeaList teas={teas}/>
>>>>>>> 51dc4bfad7f15b7c9b0238c4388f17a55e8e3dc9
        </div>
    )
}

export default TeaPage;