import React from 'react';

import { MdCreditCard, MdAddCircle, MdMonetizationOn } from 'react-icons/md';
import {
  Container,
  FirstContent,
  SecondContent,
  Round,
  Info,
  ThirdContent,
  FourthContent,
  Content,
} from './styles';

export default function Payments() {
  return (
    <Container>
      <Content>
        <FirstContent>
          <span>Pagamento rápido e seguro</span>
          <small>com Mercado Pago</small>
        </FirstContent>
        <SecondContent>
          <Round>
            <MdCreditCard size={25} color="#3483FA" />
          </Round>
          <Info>
            <span>Até 12 vezes sem juros</span>
            <a>Ver mais</a>
          </Info>
        </SecondContent>
        <ThirdContent>
          <Round>
            <MdMonetizationOn size={25} color="#3483FA" />
          </Round>
          <Info>
            <span>À vista no boleto bancário</span>
            <a>Ver mais</a>
          </Info>
        </ThirdContent>
        <FourthContent>
          <Round>
            <MdAddCircle size={25} color="#3483FA" />
          </Round>
          <Info>
            <span>Mais formas de pagamento</span>
            <a>Ver mais</a>
          </Info>
        </FourthContent>
      </Content>
    </Container>
  );
}
