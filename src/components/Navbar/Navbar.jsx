import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <img src="src/assets/V7-task/logo.svg" alt="" />
                    
                </div>
                <ul>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/About'>About</Link></li>
                    <li>Services</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
                <div>
                    <button>GET A QOUTE </button>
                </div>


            </nav>
        </>
    )
}
