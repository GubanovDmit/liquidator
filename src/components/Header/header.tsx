import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
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
    return (
        <div className="header">


            <div className="header-logo">
                <NavLink to="/">
                    <div className="header-logo__name">Liquidator</div>
                    <div className="header-logo__description">Constant liquidity exchanger</div>
                </NavLink>
            </div>


            <div className="header-menu">
                {menuLinks.map((link, i) => {
                    return (
                        <div className="header-menu__link" key={i}>
                            <a href={link.href} rel="noopener noreferrer" target="_blank">{link.value}</a>
                        </div>
                    );
                })}
            </div>

            <div className="header-buttons">

                <button className="button">
                    <NavLink to="/create">
                        <div>Create New Exchanger</div>
                    </NavLink>
                </button>

                <button className="button">
                    <NavLink to="/create">
                        <div>Create New Exchanger</div>
                    </NavLink>
                </button>

            </div>

        </div>
    );
};
