import Card from "./shared/Card"

function KurssinMuistiinpanoItem ({ item }) {
    return (
        <Card>
            <div>{item.kurssi}</div>
            <div>{item.text}</div>
            <div>{item.timestamp}</div>
        </Card>
    )
}


export default KurssinMuistiinpanoItem