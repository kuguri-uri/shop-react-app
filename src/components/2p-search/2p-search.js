import { Component } from 'react';
import './2p-search.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="input">
                <div className="title">Looking for</div>
                <div className="panel">
                    <input type="text"
                        className="form-control search-input"
                        placeholder="start typing here"
                        value={this.state.term}
                        onChange={this.onUpdateSearch}/>
                </div>
            </div>
            
        )
    }
}

export default SearchPanel;