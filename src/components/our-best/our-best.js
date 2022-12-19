import './our-best.css';
import coffe from '../../img/coffe.png';

const OurBest = () => {
    return (
        <div className="our-best">
            <div className="container">
                <h2>Our Best</h2>
                <div className="items">
                    <div className="item">
                        <img src={coffe} alt={"coffe"} />
                        <div className="wrapper">
                            <div className="title">AROMISTICO Coffee 1 kg</div>
                            <div className="price">6.99$</div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={coffe} alt={"coffe"} />
                        <div className="wrapper">
                            <div className="title">AROMISTICO Coffee 1 kg</div>
                            <div className="price">6.99$</div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={coffe} alt={"coffe"} />
                        <div className="wrapper">
                            <div className="title">AROMISTICO Coffee 1 kg</div>
                            <div className="price">6.99$</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurBest;