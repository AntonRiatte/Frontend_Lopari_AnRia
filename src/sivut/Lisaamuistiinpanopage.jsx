import { Link } from "react-router-dom"
import TallennaMuistiinpano from "../components/TallennaMuistiinpano"

function Lisaamuistiinpanopage() {
    return (
        <div>
            <TallennaMuistiinpano />
            <br />
            <Link to="/Homepage">
                <button>Homepage</button>
            </Link>
        </div>
    )
}


export default Lisaamuistiinpanopage