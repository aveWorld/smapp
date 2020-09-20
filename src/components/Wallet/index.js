import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

//Assets
import leftLine from '../../assets/svg/home_leftLine.svg';
import rightLine from '../../assets/svg/home_rightLine.svg';
import copyImg from '../../assets/svg/copy_img.svg';
import BtnImg from '../../assets/svg/home_btn-left.svg'


  function Wallet() {
      return (
      <WalletItem leftLine={leftLine} rightLine={rightLine}>
          <ReactSVG src={BtnImg} className="wallet__btn" />
          <WalletContent>
              <WalletContentHeader>
                <h3 className="wallet__title">MY WALLET</h3>
                <p className="wallet__text">--</p>
                <p className="wallet__text strong">main address</p>
                <p className="wallet__text">0x614...556 <span><ReactSVG src={copyImg} className="wallet__copy-img"/></span></p>
              </WalletContentHeader>
              <WalletContentFooter>
                <p className="wallet__balance-text">BALANCE</p>
                <p className="wallet__balance-size">63.00 <span className="wallet__balance-currency">SMC</span></p>
              </WalletContentFooter>
          </WalletContent>
      </WalletItem>
    );
  }

  const WalletItem = styled.div`
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 7px;
      height: 100%;
      background-image: url('${props => props.leftLine}');
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 7px;
        height: 100%;
        background-image: url('${props => props.rightLine}');
    }
    .wallet__btn {
      position: absolute;
      bottom: 0;
      margin-left: -30px;
    }
  `

  const WalletContent = styled.div`
    padding: 12px 48px 18px 24px; 
  `

  const WalletContentHeader = styled.div`
    padding: 0;
    .wallet__title {
      font-size: 32px;
      line-height: 40px;
      margin: 0;
    }
    .wallet_text {
      font-size: 12px;
      line-height: 15px;
    }
    .strong {
      font-weight: bold;
    }
    .wallet__copy-img {
      display: inline-block;
    }
  `

  const WalletContentFooter = styled.div`
    padding-top: 136px;
    .wallet__balance-text {
      font-size: 10px;
      line-height: 13px;
      margin: 0;
    }
    .wallet__balance-size {
      margin: 0;
      font-size: 32px;
      line-height: 40px;
      color: #65B042;
    }
    .wallet__balance-currency {
      font-size: 12px;
      line-height: 15px;
      color: #65B042;
    }
  `

export default Wallet;
