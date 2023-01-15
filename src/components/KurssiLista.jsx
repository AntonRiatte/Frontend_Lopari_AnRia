import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json())

const urlKurssit = "https://luentomuistiinpano-api.deta.dev/courses/"


const KurssiLista = () => {

    const { data, error } = useSWR(urlKurssit, fetcher)

    if (error) {
        return <div><p>Virhe</p></div>
    }

    if (!data) {
        return <div><p>Ladataan...</p></div>
    }

    if (data.length == 0) {
        return <div>Ei kursseja</div>
    }
    return (
        <div>
            <h2>Kurssit ({data.length})kpl: </h2>
            <br />
            <ul>
                {data.map((data, index) => (
                    <div className="card" key={index}>
                        <p>Kurssi: {data.name} Kurssi id: {data.id}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default KurssiLista