import './App.css'
import Navbar from './components/Navbar'
import PreNavbar from './components/PreNavbar'
import { BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
    </Router>
  )
}
