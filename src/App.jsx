import './App.css'
import KurssiLista from './components/KurssiLista'
import MuistiinpanoLista from './components/MuistiinpanoLista'
import PaaOtsikko from './components/PaaOtsikko'
import TallennaMuistiinpano from './components/TallennaMuistiinpano'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './sivut/Homepage'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Muistiinpanotpage" component={Muistiinpanotpage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
