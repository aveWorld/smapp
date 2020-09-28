import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactSVG} from 'react-svg';

//Assets
import TitleImg from '../../../assets/svg/new-vault_title.svg';
import BtnImg from '../../../assets/svg/vault_btn.svg';
import RectTopLeft from '../../../assets/svg/rect_top-left.svg';
import RectTopRight from '../../../assets/svg/rect_top-right.svg';
import RectBotLeft from '../../../assets/svg/rect_bot-left.svg';
import RectBotRight from '../../../assets/svg/rect_bot-right.svg';
import VaultTopImg from '../../../assets/svg/vault_top-img.svg'


function MasterAccounts() {
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
            <h3 className="header__title"><span><ReactSVG src={TitleImg} className="header__img"/></span> VAULT MASTER
              ACCOUNTS</h3>
          </div>
          <p className="vault__text">--</p>
          <div className="vault__text fixed-width d-flex">
            <p>Set your vault’s 3 master addresses. Approval of 2 out of 3 address’ owners is needed to use this vault.
              <span className="header__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span>
            </p>
          </div>
        </VaultHeader>
        <VaultMain>
          <div className="vault-master-accounts">
            <div className="vault-master-accounts-col">
              <div className="vault__text">Address 1 <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span> . . . . . . . . . . . . . . . . .
              </div>
              <div>
                <select name="select" className="main__select">
                  <option value="value1">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value2">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value3">My Vault name, 35.4 SMH, 0x614...556</option>
                </select>
              </div>
            </div>
            <div className="vault-master-accounts-col">
              <div className="vault__text">Address 2 <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span> . . . . . . . . . . . . . . . . .
              </div>
              <div>
                <select name="select" className="main__select">
                  <option value="value1">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value2">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value3">My Vault name, 35.4 SMH, 0x614...556</option>
                </select>
              </div>
            </div>
            <div className="vault-master-accounts-col">
              <div className="vault__text">Address 3 <span className="main__question">
                        <QuestionMark>?</QuestionMark>
                        <div className="main__tooltip">
                                <p className="tooltip__p">Vault will be created in My Wallet. To create a vault which uses a Ledger device for signing transactions, create a vault in a Ledger wallet.</p>
                        </div>
                        </span> . . . . . . . . . . . . . . . . .
              </div>
              <div>
                <select name="select" className="main__select">
                  <option value="value1">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value2">My Vault name, 35.4 SMH, 0x614...556</option>
                  <option value="value3">My Vault name, 35.4 SMH, 0x614...556</option>
                </select>
              </div>
            </div>
          </div>
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
    .header__img {
        margin-right: 5px;
    }
    .header__question {
        position: relative;
        margin-left: 5px;
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
        .header__title {
            font-size: 28px;
        }
    }
  `

const VaultMain = styled.div`
    padding-top: 10px;
    
    .vault-master-accounts-col {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
    }
    .main__select {
        width: 270px;
        height: 28px;
        color: rgba(64, 64, 64, 0.5);
        font-size: 12px;
        padding-left: 10px;
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
    padding-top: 20px;
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

const QuestionMark = styled.div`
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

export default MasterAccounts;
