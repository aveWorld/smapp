import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

//Assets
import TitleImg from '../../assets/svg/new-vault_title.svg';
import BtnImg from '../../assets/svg/vault_btn.svg';
import RectTopLeft from '../../assets/svg/rect_top-left.svg';
import RectTopRight from '../../assets/svg/rect_top-right.svg';
import RectBotLeft from '../../assets/svg/rect_bot-left.svg';
import RectBotRight from '../../assets/svg/rect_bot-right.svg';
import VaultTopImg from '../../assets/svg/vault_top-img.svg'


  function MasterAccount() {
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
                        <h3 className="header__title"><span><ReactSVG src={TitleImg} className="header__img"/></span> VAULT MASTER ACCOUNT</h3> 
                        <span className="header__question">
                            <QuestionMark>?</QuestionMark>
                            <div className="header__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                            </div>
                        </span>
                    </div>
                    <p className="vault__text">--</p>
                    <p className="vault__text fixed-width">A vault is an enhanced account with extra security and spending features.</p>
                </VaultHeader>
                <VaultMain>
                    <div className="vault__text">Vault name <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span>  . . . . . . . . . . . . . . . . .</div>
                    <input type="text" className="vault__input" placeholder="My Vault NAME"/>
                </VaultMain>
                <VaultFooter>
                    <Link to="/" className="footer__link">VAULT SETUP GUIDE</Link>
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
    padding-top: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .vault__input {
        width: 238px;
        height: 28px;
        margin-left: 30px;
    }
    .main__question {
        position: relative;
        &:hover .main__tooltip{
            display: block;
        }
    }
    .main__tooltip {
        display: none;
        position: absolute;
        width: 250px;
        height: 72px;
        background-color: white;
        font-size: 12px;
        border: 1px solid black;
        z-index: 1;
        left: 0;
        top: 0;
        margin-top: 4px;
    }
    .tooltip__p {
        text-align: center;
        vertical-align: center;
    }
    @media screen and (max-width: 992px) {
        display: block;
        .vault__input {
            width: 210px;
            height: 26px;
            margin-left: 0px;
            margin-top: 10px;
            font-size: 12px;
        }
    }
  `

  const VaultFooter = styled.div`
    padding-top: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__link {
        color: #1776E3;
        padding-left: 26px;
        font-size: 12px;
    }
    @media screen and (max-width: 992px) {
        padding-top: 85px;
    }
  `

  const QuestionMark = styled.div `
    background-color: grey;
    width: 10px;
    height: 10px;
    font-size: 8px;
    line-height: 10px;
    color: white;
    text-align: center;
    display: inline-block;
    position: relative;
    z-index: 9;
  `

export default MasterAccount;
