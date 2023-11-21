import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'

//components
import SearchBar from './SearchBar'


export default function Navbar() {
  const { color } =useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
        <nav>
            <Link to="/" className="brand">
                <h1>Coking Salsal</h1>
            </Link>
            <SearchBar />
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
