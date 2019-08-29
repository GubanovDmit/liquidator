import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, CreateExchanger } from '../../pages';
import '../../font.css';
import './app.scss';

const App: React.FC = () => {
    return (
        <div className='app-container'>
            <div className='app'>
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/create' component={ CreateExchanger } />
                </Switch>
            </div>
        </div>
    );
};

export default App;
