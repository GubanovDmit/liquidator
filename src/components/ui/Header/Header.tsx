import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import './button.scss';

const menuLinks = [
    {
        href: 'https://dex.wavesplatform.com',
        value: 'Exchange'
    },
    {
        href: 'https://dex.wavesplatform.com',
        value: 'How It Works'
    },
    {
        href: 'https://dex.wavesplatform.com',
        value: 'Support'
    },
    {
        href: 'https://dex.wavesplatform.com',
        value: 'Our Solution'
    }
];

interface IHeaderProps {
    isLoggedIn: boolean;

    onLoginChange(_: boolean): void;
}

export const Header: React.FC<IHeaderProps> = ({ isLoggedIn, onLoginChange }) => {
    async function onClickLogIn() {
        await new Promise(resolve => setTimeout(resolve, 500));

        onLoginChange(true);
    }

    async function onClickLogOut() {
        await new Promise(resolve => setTimeout(resolve, 500));

        onLoginChange(false);
    }

    return (
        <div className="header">
            <div className="header-logo">
                <NavLink to="/">
                    <div className="header-logo__name">Liquidator</div>
                    <div className="header-logo__description">Constant liquidity exchanger</div>
                </NavLink>
            </div>

            <div className="header-menu">
                {menuLinks.map((link, i) => (
                    <div className="header-menu__link" key={i}>
                        <a href={link.href} rel="noopener noreferrer" target="_blank">{link.value}</a>
                    </div>
                ))}
            </div>

            <div className="header-buttons">
                <div className="button-container">
                    <NavLink to="/create">
                        <button className={isLoggedIn ? "button button__blue" : "button button__blue button__blue-disabled"}>
                            Create New Exchanger
                        </button>
                    </NavLink>
                </div>

                {isLoggedIn ? (
                    <div className="button-container">
                        <NavLink to="/myexchangers">
                            <button className="button button__transparent">
                                My Exchangers
                            </button>
                        </NavLink>
                        <button className="button button__transparent" onClick={onClickLogOut}>X</button>
                    </div>
                ) : (
                    <div className="button-container">
                        <button className="button button__transparent" onClick={onClickLogIn}>
                            Log in Waves Keeper
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
