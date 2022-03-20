import "../css/styles.css";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div>
                <Link to="/"><p className="Header_BankName">SPRX BANK</p></Link>
            </div>
            <div className="Header_Options">
                <Link to="/"><p>Home</p></Link>
                <Link to="/transfer-money"><p>Transfer Money</p></Link>
            </div>
        </div>
    )
}

export default Header
