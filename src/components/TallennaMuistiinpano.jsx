import { useHookstate } from "@hookstate/core"
import { useState } from "react"
import { State } from "../State"


const TallennaMuistiinpano = () => {

    const text = useHookstate("")

    const globalstate = useHookstate(State)

    const handleSave = () => {
        globalstate.merge([text.get()])
    }

    return (
        <div>
            <label htmlFor="text">Kirjoita tähän muistiinpano</label>
            <br />
            <textarea
                name="text"
                id="text"
                cols="50"
                rows="20"
                maxLength="200"
            ></textarea>
            <br />
            <input type="button" value="Tallenna muistiinpano"></input>
        </div>
    )
}


export default TallennaMuistiinpano