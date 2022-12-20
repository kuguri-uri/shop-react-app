import './2p-promo.css';
import logo from '../../icons/Logo.svg';

const CoffePromo = () => {
    return (
        <div className="coffe-promo">
            <div className="header">
                    <img src={logo} alt={"logo"}/>
                    <div>
                        <a href="our-coffe.html">Our coffee</a>
                    </div>
                    <div>
                        <a href="for-your-pleasure.html">For your pleasure</a>
                    </div>
            </div>
            <div className="container">
                <h1>Our Coffee</h1>
            </div>
        </div>
    );
}

export default CoffePromo;