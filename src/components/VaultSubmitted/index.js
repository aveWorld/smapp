import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

// Assets
import TitleImg from '../../assets/svg/new-vault_title.svg';
import BtnImg from '../../assets/svg/vault_btn.svg';
import RectTopLeft from '../../assets/svg/rect_top-left.svg';
import RectTopRight from '../../assets/svg/rect_top-right.svg';
import RectBotLeft from '../../assets/svg/rect_bot-left.svg';
import RectBotRight from '../../assets/svg/rect_bot-right.svg';
import VaultTopImg from '../../assets/svg/vault_top-img.svg'
import BlackLock from '../../assets/svg/Lock-black.png'
import Refresh from '../../assets/svg/refresh.svg';
import Wallet from '../../assets/svg/wallet.svg';
import VaultIcon from '../../assets/svg/vault-icon.svg';


function VaultSubmitted() {
  return (
    <VaultItem>
      <ReactSVG src={RectTopLeft} className="rect_top-left"/>
      <ReactSVG src={RectTopRight} className="rect_top-right"/>
      <ReactSVG src={RectBotLeft} className="rect_bot-left"/>
      <ReactSVG src={RectBotRight} className="rect_bot-right"/>
      <ReactSVG src={VaultTopImg} className="rect-img"/>
      <VaultWrapper>
        <VaultHeader>
          <div className="header__title">
            <h3 className="header__title"><span><ReactSVG src={TitleImg} className="header__img"/></span> New Vault
              Submitted!</h3>
          </div>
          <p className="vault__text">--</p>
          <img src={BlackLock} alt="img"/>
          <p className="vault__green-text">Your new vault transaction has been submitted to the mesh and is being
            created.</p>
        </VaultHeader>
        <VaultMain>
          <div className="new-vault-container">
            <div className="vault-submitted-col">
              <div className="vault-submitted-items">
                <div className="vault-submitted-svg">
                  <ReactSVG
                    src={Refresh}
                  />
                </div>
                <div>
                  <p className="vault__text">Track creation progress in your transactions log. </p>
                </div>
              </div>
              <div className="vault-submitted-items">
                <div className="vault-submitted-svg">
                  <ReactSVG
                    src={Wallet}
                  />
                </div>
                <div>
                  <p className="vault__text">Your new vault will be added to in your wallet’s accounts. </p>
                </div>
              </div>
              <div className="vault-submitted-items">
                <div className="vault-submitted-svg">
                  <ReactSVG
                    src={VaultIcon}
                  />
                </div>
                <div>
                  <p className="vault__text">To work with your new vault, select it from your wallet’s accounts list drop-down (left side). </p>
                </div>
              </div>
            </div>
          </div>
        </VaultMain>
        <VaultFooter>
          <Link to="/" className="footer__link">Vault Guide</Link>
          <ReactSVG src={BtnImg} className="footer__btn"/>
        </VaultFooter>
      </VaultWrapper>
    </VaultItem>
  );
}

const VaultItem = styled.div`
    position: relative;
    .vault__text {
        font-size: 12px;
        line-height: 15px;
    }
    margin-left: 9px;
    background: rgba(0, 0, 0, 0.02);
    .rect_top-left {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: -20px;
        margin-left: -8px;
    }
    .rect_top-right {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -20px;
        margin-right: -5px;
    }
    .rect_bot-left {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: -10px;
        margin-left: -8px;
    }
    .rect_bot-right {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: -10px;
        margin-right: -5px;
    }
    .rect-img {
        position: absolute;
        right: 4px;
        margin-top: -32px;
    }
  `

const VaultWrapper = styled.div`
    padding: 12px 22px 0 8px;
  `

const VaultHeader = styled.div`
    .header__img {
        display: inline-block;
    }
    .header__title {
        font-size: 32px;
        margin: 0;
        text-transform: uppercase;
    }
    
    .vault__green-text {
    font-weight: bold;
    font-size: 12px;
    color: green;
    }
    
    .fixed-width {
        width: 70%;
    }
    .header__title {
        display: flex;
    }
    .header__question {
        display: flex;
        margin-top: 12px;
        margin-left: 5px;
        &:hover .header__tooltip{
            display: block;
        }
    }
    .header__img {
        margin-right: 5px;
    }
    .header__tooltip {
        display: none;
        position: absolute;
        width: 250px;
        height: 72px;
        background-color: white;
        font-size: 12px;
        border: 1px solid black;
        z-index: 1;
    }
    .tooltip__p {
        text-align: center;
        vertical-align: center;
    }
    @media screen and (max-width: 992px) {
        .header__title {
            font-size: 28px;
        }
    }
  `

const VaultMain = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    .new-vault-container {
    display: flex;
    flex-direction: column;
    }
    
    .vault-submitted-col {
    display: flex;
    flex-direction: column;
    }
    
    .vault-submitted-items {
    display: flex;
    align-items: center;
    }
    
    .vault-submitted-svg {
    margin-right: 10px;
    }
    
 
    
`

const VaultFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__link {
        color: #1776E3;
        padding-left: 26px;
        font-size: 12px;
        text-transform: uppercase;
    }
    @media screen and (max-width: 992px) {
        padding-top: 85px;
    }
`

export default VaultSubmitted;
