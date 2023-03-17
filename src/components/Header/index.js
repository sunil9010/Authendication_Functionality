// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="ulElement">
    <Link to="/" className="link">
      <li>Home</li>
    </Link>
    <Link to="/about" className="link">
      <li>About</li>
    </Link>
  </ul>
)
export default Header
