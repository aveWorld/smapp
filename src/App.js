import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';


//Components
import Layout from './components/Layout';
import Wallet from './components/Wallet';
import NewVault from './components/NewVault';
import MasterAccount from './components/MasterAccount'
import VaultType from "./components/VaultType";
import DailySpending from './components/DailySpending';
import MasterAccounts from './components/MasterAccount/MasterAccounts';
import CreateVaultTransaction from "./components/VaultTransaction";
import ReviewNewVault from './components/ReviewNewVault';
import VaultSubmitted from "./components/VaultSubmitted";


function App() {
  return (
    <Layout>
      <HomeWrapper>
        <Wallet />
        <Switch>
          <Route exact path="/" component={() => <NewVault />} />
          <Route exact path="/master_account" component={() => <MasterAccount />} />
          <Route exact path="/master-accounts" component={() => <MasterAccounts />} />
          <Route exact path="/vault-type" component={() => <VaultType />} />
          <Route exact path="/daily-spending" component={() => <DailySpending />} />
          <Route exact path="/create-vault" component={() => <CreateVaultTransaction />} />
          <Route exact path="/review-new-vault" component={() => <ReviewNewVault />} />
          <Route exact path="/vault-submitted" component={() => <VaultSubmitted />} />
        </Switch>
      </HomeWrapper>
    </Layout>
  );
}

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 52px);
  `

export default App;