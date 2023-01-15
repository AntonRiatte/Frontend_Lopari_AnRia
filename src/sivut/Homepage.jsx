import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"


function Homepage() {

    const history = useHistory()

    const lmPage = () => {
        history.push("/Lisaamuistiinpanopage")
    }
    const mpPage = () => {
        history.push("/Muistiinpanotpage")
    }
    const lkPage = () => {
        history.push("/Lisaakurssipage")
    }


    return (
        <div>
            <button onClick={lmPage}>Luo muistiinpano</button>
            <button onClick={mpPage}>Muistiinpanot</button>
            <button onClick={lkPage}>Lisää kurssi</button>
        </div>
    )
}


export default Homepage