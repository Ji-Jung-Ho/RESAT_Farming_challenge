import React from 'react';
import ManinComponent from './component/ManinComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <HeaderComponent/>
      <ManinComponent/>
      <FooterComponent/>
    </div>
  );
};