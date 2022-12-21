import './2p-item.css';

import coffe from '../../img/coffe.png';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <div className="item">
                <img src={coffe} alt={"coffe"} />
                <div className="wrapper">
                    <div className="title">AROMISTICO Coffee 1 kg</div>
                    <div className="location">Brazil</div>
                    <div className="price">6.99$</div>
                </div>
            </div>
        </li>
    )
}

                    

export default EmployeesListItem;