import './footer.css';
import logo from '../../icons/black_logo.svg';
import beans from '../../icons/black.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="links">
                    <img src={logo} alt={"logo"}/>
                    <div>Our coffee</div>
                    <div>For your pleasure</div>
            </div>
            <div className="divider">
                    <div></div>
                    <img src={beans} alt={"beans"}/>
                    <div></div>
                </div>
        </div>
    );
}

export default Footer;