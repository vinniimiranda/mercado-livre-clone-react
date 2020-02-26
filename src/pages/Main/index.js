import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Payments from '../../components/Payments';
import Recommendations from '../../components/Recommendations';

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
        <Recommendations title="Baseada na sua última visita" />
        <Recommendations title="Relacionado com as visitas em Eletrônicos, Áudio e Vídeo" />
        <Recommendations
          title="Ofertas"
          linkTitle="Ver todas"
          imageLink="https://http2.mlstatic.com/D_Q_NP_775493-MLB40075226104_122019-AB.webp"
        />
        <Recommendations title="Relacionado com as visitas em Beleza e Cuidado Pessoal" />
        <Recommendations
          title="Inspirado nos seus favoritos"
          linkTitle="Ver favoritos"
          imageLink="https://http2.mlstatic.com/D_Q_NP_938714-MLA40518962487_012020-AB.webp"
        />
      </div>
    </>
  );
}
