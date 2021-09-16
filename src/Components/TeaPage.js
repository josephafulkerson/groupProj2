import React, {useState, useEffect} from 'react';
import TeaList from './TeaList';
import Search from './Search';

function TeaPage({handleAddCart, cartItems}) {
    const [teas, setTeas] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/teas')
            .then((r) => r.json())
            .then(setTeas);
        }, []);

        const teasToDisplay = teas.filter((tea) =>
            tea.keywords.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div>
            <br />
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <br />
            <TeaList  teas={teasToDisplay} handleAddCart={handleAddCart} cartItems={cartItems} />
        </div>
    )
}

export default TeaPage;
