import { Component } from 'react';

import AppPromo from '../app-promo/app-promo';
import AppAbout from '../app-about/app-about';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title:'AROMISTICO Coffee 1 kg', location: 'Brazil', price: 7, id: 1},
                {title:'AROMISTICO Coffee 1 kg', location: 'Kenya', price: 7, id: 2},
                {title:'AROMISTICO Coffee 1 kg', location: 'Kenya', price: 7, id: 3},
                {title:'AROMISTICO Coffee 1 kg', location: 'Columbia', price: 7, id: 4},
                {title:'AROMISTICO Coffee 1 kg', location: 'Brazil', price: 7, id: 5},
                {title:'AROMISTICO Coffee 1 kg', location: 'Brazil', price: 7, id: 6},
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
                <OurBest/>
                <Footer/>

            </div>
        );
    }
}

export default App;