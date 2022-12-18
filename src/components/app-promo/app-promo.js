import './app-promo.css';
import logo from '../../icons/Logo.svg';
import beans from '../../icons/Group.png';

const AppPromo = () => {
    return (
        <div className="app-promo">
            <div className="header">
                    <img src={logo} alt={"logo"}/>
                    <div>Our coffee</div>
                    <div>For your pleasure</div>
            </div>
            <div className="container">
                <h1>Everything You Love About Coffee</h1>
                <div className="divider">
                    <div></div>
                    <img src={beans} alt={"beans"}/>
                    <div></div>
                </div>
                <div className="descr">
                We makes every day full of energy and taste<br/>
                Want to try our beans?
                </div>
                <button>More</button>
            </div>
        </div>
    );
}

export default AppPromo;