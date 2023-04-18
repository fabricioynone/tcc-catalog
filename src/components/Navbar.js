import './Navbar.css';
import { FaBaby, FaEarlybirds, FaGitlab } from 'react-icons/fa';
import etec_white from './resources/etec_white'


const Navbar = () => {
    return ( 
        <aside>
            <nav>
                <div className="logo--container">
                    <img src={etec_white} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="">
                            <div className="tab--container">
                                <FaBaby />
                                <h3>Administração</h3>
                            </div>    
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className="tab--container">
                            <FaGitlab />
                                <h3>Desenvolvimento de Sistemas</h3>
                            </div>    
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div className="tab--container">
                                <FaEarlybirds />
                                <h3>Marketing</h3>
                            </div>    
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
     );
}
 
export default Navbar;