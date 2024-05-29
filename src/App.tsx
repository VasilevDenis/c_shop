import { Component } from 'react';
import './App.css';
import Item from './item';
import ShopItemFunc from './ShopItemFunc';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="background-element"></div>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <div className="window">
                    <ShopItemFunc item={Item} />
                </div>
            </div>
        );
    }
}

export default App;
