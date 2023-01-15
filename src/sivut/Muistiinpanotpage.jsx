import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"
import MuistiinpanoLista from "../components/MuistiinpanoLista";


function Muistiinpanotpage() {

    const history = useHistory()

    const home = () => {
        history.push("/")
    }

    return (
        <div>
            <MuistiinpanoLista />
            <br />
            <button onClick={home}>Homepage</button>
        </div>
    )
}


export default Homepage