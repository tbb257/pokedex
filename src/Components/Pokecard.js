import React, {Component} from 'react'
import "./Pokecard.css"

const PokeIMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component{
    render(){
        let PokeID = (this.props.pokeID).toString()
        let PaddedPokeID = ""
        for (let i = 0; i < (3-PokeID.length); i++){
            PaddedPokeID += "0"
        }
        PaddedPokeID += PokeID
        let imgSrc = `${PokeIMG_API}${PaddedPokeID}.png`;

        let PokeLink = `https://bulbapedia.bulbagarden.net/wiki/${this.props.name}_(Pok%C3%A9mon)`


        return (
            <div className="Pokecard" >
                <h1 className="Pokecard-Title">{this.props.name[0].toUpperCase() + this.props.name.substring(1)}</h1>
                <a href={PokeLink}><img className="Pokecard-Img" alt={this.props.name} src={imgSrc}></img></a>
                {/* <div className="P"> Type: {this.props.type[0].toUpperCase()+this.props.type.substring(1)} </div> */}
                {/* <div> EXP: {this.props.exp} </div> */}
            </div>
        );
    }
}


export default Pokecard;
