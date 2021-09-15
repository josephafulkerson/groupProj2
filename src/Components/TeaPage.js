import React, {useState, useEffect} from 'react'
import TeaList from './TeaList';
import Search from './Search'

function TeaPage () {
    const [teas, setTeas] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/teas')
            .then((r) => r.json())
            .then(setTeas);
        }, []);

        const teasToDisplay = teas.filter((tea) =>
    tea.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <div>
            {/* <h1>House Tea Made Locally</h1> */}
            <br />
             <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <br />
            <TeaList teas={teasToDisplay}/>
            <br />
        </div>
    )
}

export default TeaPage;
