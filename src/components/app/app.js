import { Component } from 'react';

import AppPromo from '../app-promo/app-promo';
import AppAbout from '../app-about/app-about';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Kaveh', salary: 0, increase: false, rise: true, id: 1},
                {name:'Alhaitham', salary: 2500, increase: true, rise: false, id: 2},
                {name:'Tartaglia', salary: 4200, increase: false, rise: false, id: 3},
                {name:'Zhongli', salary: 80, increase: false, rise: false, id: 4}
            ],
            term: '', 
            filter: 'all'
        }
        this.maxId = 5;
    }

    render() {

        return (
            <div className="app">
                <AppPromo/>
                <AppAbout/>

            </div>
        );
    }
}

export default App;