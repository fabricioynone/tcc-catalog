
import './Header.css'

const Header = ({course}) => {
    return ( 
        <header>
            <h2 className="course--name">{course}</h2>
            <input type="search" placeholder="search..." className="searchbar" />
        </header>
     );
}
 
export default Header;
