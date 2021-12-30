
import './App.css';
import BlueRectangle from './Components/pages/Text/BlueRectangle';
import Navbar from './Components/shared/Navbar';
import Gradient from './Components/pages/Guide/Gradient';
import Form from './Components/shared/Form/Form';
import Formcon from './Components/shared/Form/Formcon'
import logo from './logo.png'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Footer from './Components/shared/Footer';


function App() {
  return (
   <Router>
   <div className="App">
     <div className='logo'>
    <Link to='/'> <img src={logo} alt=''/></Link>
     </div>
      <Navbar />
      <BlueRectangle/>
      <Gradient/>
      <Footer/>

      <Switch>
      <Route path="/inscription">
       <Form/>
      </Route>
      <Route path="/connexion">
        <Formcon/>
      </Route>
       <Route exact path='/'>

       </Route>
      </Switch>
       
    </div>
    </Router>
  );
}

export default App;
