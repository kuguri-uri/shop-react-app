import { Component } from 'react';

import AppPromo from '../app-promo/app-promo';
import AppAbout from '../app-about/app-about';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import CoffePromo from '../2p-promo/2p-promo';
import CoffeAbout from '../2p-about/2p-about';

import SearchPanel from '../2p-search/2p-search';
import AppFilter from '../2p-filter/2p-filter';
import EmployeesList from '../2p-list/2p-list';
import CoffeFooter from '../2p-footer/2p-footer';

import CoffePromo3 from '../3p-promo/3p-promo';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title:'AROMISTICO Coffee 1 kg', location: 'Brazil', price: 6.99, id: 1},
                {title:'AROMISTICO Coffee 1 kg', location: 'Kenya', price: 5.49, id: 2},
                {title:'AROMISTICO Coffee 0.5 kg', location: 'Kenya', price: 3.49, id: 3},
                {title:'AROMISTICO Coffee 1 kg', location: 'Columbia', price: 7.99, id: 4},
                {title:'AROMISTICO Coffee 2 kg', location: 'Brazil', price: 8.99, id: 5},
                {title:'AROMISTICO Coffee 0.5 kg', location: 'Brazil', price: 4.99, id: 6},
            ],
            term: '', 
            filter: 'all'
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.location == 'Brazil');
            case 'Kenya':
                return items.filter(item => item.location == 'Kenya');
            case 'Columbia':
                return items.filter(item => item.location == 'Columbia');
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppPromo/>
                <AppAbout/>
                <OurBest/>
                <Footer/>

                <CoffePromo/>
                <CoffeAbout/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <div className="data-panel">
                    <EmployeesList 
                        data={visibleData}/>
                </div>

                <CoffeFooter/>

                <CoffePromo3/>
                
                

            </div>
        );
    }
}

export default App;