import { Link } from "react-router-dom"
import '../navbar/navbar.css'
const NavBar=()=>{
    return(
    <div className="nav">
            <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>C2C</Link></li>
            </ul>
        </nav>
    </div>
    )
}
export default NavBar