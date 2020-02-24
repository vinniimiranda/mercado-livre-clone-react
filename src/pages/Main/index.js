import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Payments from '../../components/Payments';
import History from '../../components/History';

export default function Main() {
  return (
    <>
      <Header />
      <Slider />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Payments />
        <History />
      </div>
    </>
  );
}
