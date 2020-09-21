import React from 'react';
import styled from 'styled-components';

//Components
import Wallet from '../Wallet';
import NewVault from '../NewVault';

  function Home() {
    return (
      <HomeWrapper>
        <Wallet />
        <NewVault />
      </HomeWrapper>
    );
  }

  const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 52px);
    // @media screen and (min-width: 1400px) {
    //   transform: scale(1.2);
    // }
  `

export default Home;
