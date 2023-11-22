import React, {useEffect, useState} from 'react'
import Pokecard from './Pokecard';
import "./Pokedex.css";


function KantoPokedex(){
    const [Pokemon, setPokemon] = useState([]);
    const getData = async () => {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
        if (response.ok){
            const data = await response.json();
            setPokemon(data.results);
        }
    }
    useEffect(()=>{
        getData();
    }, []);

    const [filter, setFilter] = useState("");
    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);
    }


    return(
            <div className="Pokedex">
                <div className="Search-Div">
                    <form>
                            <input className="PokeSearch-Form" onChange={handleFilterChange} value={filter} placeholder="Search for a Pokemon"/>
                    </form>
                </div>
                <div className="Pokedex-Cards">
                    {Pokemon.filter(pokemon => pokemon.name.toUpperCase().includes(filter.toUpperCase())).map((poke, i) =>{
                        let imgURL = poke.url.substring(34, poke.url.length-1);
                        return(
                            <Pokecard pokeID={imgURL} id={i} name={poke.name}/>
                        )
                    })}
                </div>
            </div>
    )
}

export default KantoPokedex;
