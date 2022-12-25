import './4p-promo.css';
import logo from '../../icons/Logo.svg';

const PleasurePromo = () => {
    return (
        <div className="pleasure-promo">
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
                <h1>For your pleasure</h1>
            </div>
        </div>
    );
}

export default PleasurePromo;