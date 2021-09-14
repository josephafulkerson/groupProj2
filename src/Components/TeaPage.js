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
             <h1>House Tea Made Locally</h1>
             <br />
             {/* <Search /> */}
             <br />
             <TeaList itemsPerRow={6}
             teas={teas}/>
        </div>
     )
 }

 export default TeaPage;