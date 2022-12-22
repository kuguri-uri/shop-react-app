import './2p-item.css';

import coffe from '../../img/coffe.png';


const EmployeesListItem = (props) => {

    const {title, location, price, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }

    // return (
    //     <li className={classNames}>
    //         <div className="item">{title}</div>
    //         <div className="list-group-item-input" defaultValue={salary + '$'}/>
    //         <div className='d-flex justify-content-center align-items-center'>
    //             <button type="button"
    //                 className="btn-cookie btn-sm "
    //                 onClick={onToggleProp} 
    //                 data-toggle="increase">
    //                 <i className="fas fa-cookie"></i>
    //             </button>

    //             <button type="button"
    //                     className="btn-trash btn-sm "
    //                     onClick={onDelete}>
    //                 <i className="fas fa-trash"></i>
    //             </button>
    //             <i className="fas fa-star"></i>
    //         </div>
    //     </li>
    // )

    return (
        <li className={classNames}>
            <div className="item">
                <img src={coffe} alt={"coffe"} />
                <div className="wrapper">
                    <div className="title">{title}</div>
                    <div className="location">{location}</div>
                    <div className="price">{price + '$'}</div>
                </div>
            </div>
        </li>
    )
}

                    

export default EmployeesListItem;