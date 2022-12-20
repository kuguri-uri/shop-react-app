import './2p-about.css';
import beans from '../../icons/black.png';
import woman from '../../img/woman.png';

const CoffeAbout = () => {
    return (
        <div className="coffe-about">
            <div className="container">
                <div className="items">
                    <div className="item"><img src={woman} alt={"woman"}/></div>

                    <div className="item">
                        <h2>About our beans</h2>
                        <div className="divider">
                            <div></div>
                            <img src={beans} alt={"beans"}/>
                            <div></div>
                        </div>
                        <div className="descr">
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            </p>
                            <p>
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. <br/> As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="line"></div>
                
            </div>
        </div>
    );
}

export default CoffeAbout;