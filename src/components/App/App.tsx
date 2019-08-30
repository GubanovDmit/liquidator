import React, { memo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateExchanger, Main, MyExchangers } from '../pages';
import '../../font.css';
import './app.scss';
import { Header } from "../ui/Header/Header";


export const App: React.FC = memo(() => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div className='app-container'>
            <div className='app'>
                <Header isLoggedIn={isLoggedIn} onLoginChange={setLoggedIn} />

                <Switch>
                    <Route exact path='/' component={Main} />
                    {isLoggedIn && (
                        <>
                            <Route exact path='/create' component={CreateExchanger} />
                            <Route exact path='/myexchangers' component={MyExchangers} />
                        </>
                    )}
                </Switch>
            </div>

            <pre>{JSON.stringify(isLoggedIn)}</pre>
        </div>
    );
});
