import React from 'react';
import Header from './Header'
import RightLine from './RightLine'

function Layout(props) {
  const { children } = props;  
  return (
    <>
      <Header />
      <RightLine />
      {children}
    </>
  );
}

export default Layout;
