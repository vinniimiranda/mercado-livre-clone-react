import React, { useState } from 'react';

import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import {
  Container,
  Content,
  Title,
  ProductList,
  Product,
  Detail,
  NextButton,
} from './styles';

export default function Recommendations({
  title,
  linkTitle = 'Ver histórico',
  imageLink = 'https://http2.mlstatic.com/D_Q_NP_787753-MLB40815769569_022020-AB.webp',
}) {
  const products = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [x, setX] = useState(0);
  function next() {
    console.log(x);

    if (x >= 200) {
      setX(0);
    } else {
      setX(x + 100);
    }
  }

  function back() {
    setX(x - 100);
  }
  return (
    <Container>
      <Content>
        <Title>
          <h2>{title}</h2>
          <a>{linkTitle}</a>
        </Title>

        <ProductList x={x}>
          {products.map(product => (
            <Product key={product}>
              <img src={imageLink} alt={imageLink} />
              <span>R$ 133</span>
              <small>12x R$ 12,71</small>

              <Detail>
                <small>Fone De Ouvido Inalámbricos Qcy T2c Preto</small>
              </Detail>
            </Product>
          ))}
        </ProductList>
      </Content>
      <NextButton onClick={next}>
        <MdChevronRight size={40} color="#3483FA" />
      </NextButton>
    </Container>
  );
}
