import { useHookstate } from "@hookstate/core"
import { useEffect, useState } from "react"
import { State } from "../State"
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json())

const urlMuistiinpanot = "https://luentomuistiinpano-api.deta.dev/notes/"


const MuistiinpanoLista = () => {

    const { data, error } = useSWR(urlMuistiinpanot, fetcher)

    const MuistiinpanotLista = {data}

    if (error) {
        return <div><p>Virhe</p></div>
    }

    if (!data) {
        return <div><p>Ladataan...</p></div>
    }

    if (data.length === 0) {
        return <div>Ei muistiinpanoja</div>
    }
    return (
        <div>
            <h2>Muistiinpanot ({data.length})kpl: </h2>
            <br />
            <ul>
                {data.map((data, index) => (
                    <div className="card" key={index}>
                        <p>Kurssi: {data.course.name} Kurssi id: {data.course.id}</p>
                        <p>Muistiinpano: {data.text}</p>
                        <p>Aikaleima: {data.timestamp}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default MuistiinpanoLista