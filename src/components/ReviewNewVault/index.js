import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

//Assets
import TitleImg from '../../assets/svg/new-vault_title.svg';
import CancelImg from '../../assets/svg/cancel_btn.svg';
import CreateVaultImg from '../../assets/svg/create_vault.svg';
import RectTopLeft from '../../assets/svg/rect_top-left.svg';
import RectTopRight from '../../assets/svg/rect_top-right.svg';
import RectBotLeft from '../../assets/svg/rect_bot-left.svg';
import RectBotRight from '../../assets/svg/rect_bot-right.svg';
import VaultTopImg from '../../assets/svg/vault_top-img.svg'


  function ReviewNewVault() {
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
                        <h3 className="header__title"><span><ReactSVG src={TitleImg} className="header__img"/></span> REVIEW NEW VAULT</h3> 
                    </div>
                    <p className="vault__text">--</p>
                    <p className="vault__text fixed-width">Review your new vault information.</p>
                </VaultHeader>
                <VaultMain>
                    <div className="main__div">
                        <div className="main__div__first">Name</div>
                        <div className="main__div__second">MY SMARTWALLET</div>
                    </div>
                    <div className="vault__text main__div">Configuration <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span>
                        <div className="main__div__second">2/3 MULTI-SIGNATURE</div>
                    </div>
                    <div className="vault__text main__div">Master Accounts  <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span>
                        <div className="main__div__second">0x1234...1234, 0x1234...1234, 0x1234...1234</div>
                    </div>
                    <div className="main__div">
                        <div className="main__div__first">Daily Spending Limit</div>
                        <div className="main__div__second">1 SMESH</div>
                    </div>
                    <div className="main__div">
                        <div className="main__div__first">Daily Spending Account</div>
                        <div className="main__div__second">0x1234...1234</div>
                    </div>
                    <div className="main__div">
                        <div className="main__div__first">Create Using Account</div>
                        <div className="main__div__second">My Main Account 0x1234...1234</div>
                    </div>
                    <div className="main__div">
                        <div className="main__div__first">Fund Vault Amount</div>
                        <div className="main__div__second">5 SMESH</div>
                    </div>
                    <div className="main__div">
                        <div className="main__div__first">Fee</div>
                        <div className="main__div__second">Up to 300 Smidge (300 Gas Units at 1 Smidge per UNIT)</div>
                    </div>                    
                </VaultMain>
                <VaultFooter>
                    <ReactSVG src={CancelImg} className="cancel__btn"/>
                    <ReactSVG src={CreateVaultImg} className="footer__btn"/>
                </VaultFooter>
            </VaultWrapper>
        </VaultItem>
    );
  }

  const VaultItem = styled.div`
    margin-top: 50px;
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
    padding-top: 5px;
    justify-content: space-between;
    align-items: center;
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
    .main__div {
        display: flex;
        border-bottom: 1px solid rgba(37, 36, 41, 0.75);
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .main__div__first {
        font-size: 12px;
        margin-right: 150px;
    }
    .main__div__second {
        margin-left: auto;
        font-size: 10px;
        color: rgba(37, 36, 41, 0.75);
        padding-left: 10px;
    }
  `

  const VaultFooter = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    .cancel__btn {
        margin-left: auto;
    }
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

export default ReviewNewVault;
