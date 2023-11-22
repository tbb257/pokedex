import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){
    return(
        <nav >
            <div className="grid-container">
                <div className="Poke-Logo">
                    <NavLink to="/">
                            <img
                            alt=""
                            src={require("../Images/Pokedex.png")}
                            style={{width: "50px", height:"50px"}}
                            />
                    </NavLink>
                </div>
                <div className="Region-Nav">
                    <NavLink className="navText" to="/Kanto">Kanto</NavLink>
                    <NavLink className="navText" to="/Johto">Johto</NavLink>
                    <NavLink className="navText" to="/Hoenn">Hoenn</NavLink>
                    <NavLink className="navText" to="/Sinnoh">Sinnoh</NavLink>
                    <NavLink className="navText" to="/Unova">Unova</NavLink>
                    <NavLink className="navText" to="/Kalos">Kalos</NavLink>
                    <NavLink className="navText" to="/Alola">Alola</NavLink>
                    <NavLink className="navText" to="/Galar">Galar</NavLink>
                    <NavLink className="navText" to="/Paldea">Paldea</NavLink>
                </div>
            </div>
        </nav>
    )
};


export default Nav
