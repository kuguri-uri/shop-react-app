import './3p-about.css';
import beans from '../../icons/black.png';
import about from '../../img/about.jpg';

const ItemAbout = () => {
    return (
        <div className="item-about">
            <div className="container">
                <div className="items">
                    <div className="item"><img src={about} alt={"about"}/></div>

                    <div className="item">
                        <h2>About it</h2>
                        <div className="divider">
                            <div></div>
                            <img src={beans} alt={"beans"}/>
                            <div></div>
                        </div>
                        <div className="descr">
                            <p>
                                <span>Country:</span> Brasil
                            </p>
                            <p>
                                <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                <span>Price:</span> 16.99$
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemAbout;