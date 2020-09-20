import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

//Components

//Assets
import Logo from '../../../assets/svg/logo.svg';
import Square1 from '../../../assets/svg/square1.svg';
import Square2 from '../../../assets/svg/square2.svg';
import Square3 from '../../../assets/svg/square3.svg';
import Square4 from '../../../assets/svg/square4.svg';

  function Header() {
    return (
        <header>
            <HeaderWrapper>
                {/* <ReactSVG src={Logo} className="header__logo"/>   */}
                <HeaderUL>
                    <Link to="/" className="header__link"><li><ReactSVG src={Logo} className="header__logo"/></li></Link>
                    <Link to="/" className="header__link link__ball"><li>NETWORK</li></Link>
                    <Link to="/" className="header__link"><li>SMESHING</li></Link>
                    <Link to="/" className="header__link"><li>WALLET</li></Link>
                    <Link to="/" className="header__link"><li>CONTACTS</li></Link>
                </HeaderUL>
                <HeaderUL className="header__squares">
                    <ReactSVG src={Square1} className="header__square" />
                    <ReactSVG src={Square1} className="header__square" />
                    <ReactSVG src={Square1} className="header__square" />
                    <ReactSVG src={Square1} className="header__square" />
                </HeaderUL>
            </HeaderWrapper>
        </header>
    );
  }

  const HeaderWrapper = styled.div`
    margin-right: 41px;
    margin-left: 20px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    .header__link {
        margin: 0 20px;
        font-size: 12px;
        text-decoration: none;
        color: #CFCFCF;
        transition: all .2s ease;
        &:hover {
            color: #AA58B1;
            text-decoration: underline;
        }
    }
    .header__squares {
        margin-left: auto;
    }
    .link__ball {
        position: relative;
        &::before {
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            margin-left: -10px;
            top: 30%;
            background-color: #2F80ED;
            border-radius: 50%;
        }
    }
    .header__square {
        margin-right: 8px;
    }
    .header__logo {
        margin-top: 5px;
    }
  `

  const HeaderUL = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
  `

export default Header;
