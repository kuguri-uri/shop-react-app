import EmployeesListItem from "../2p-item/2p-item";

import '../2p-item/2p-item';
import './2p-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <div className="container">
            <div className="items">
                {elements}
            </div>
        </div>
        
    )
}

export default EmployeesList;