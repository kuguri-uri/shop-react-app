import "./2p-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Brazil'},
        {name: 'rise', label: 'Kenya'},
        {name: 'moreThen1000', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="wrapper">
            <div className="title">Or filter</div>
            <div className="btn-group">
                {buttons}
            </div>
        </div>
        
    )
}

export default AppFilter;