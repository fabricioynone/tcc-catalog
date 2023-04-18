import { AiFillHome } from "react-icons/ai";
import './Header.css'

const Header = ({course}) => {
    return ( 
        <header>
            <h2 className="course--name">{course}</h2>
            <input type="search" placeholder="search..." className="searchbar" />
            <AiFillHome/>
        </header>
     );
}
 
export default Header;
