import React from 'react';

import {
  Container,
  Content,
  Title,
  ProductList,
  Product,
  Detail,
} from './styles';

export default function Recommendations({
  title,
  linkTitle = 'Ver histórico',
  imageLink = 'https://http2.mlstatic.com/D_Q_NP_787753-MLB40815769569_022020-AB.webp',
}) {
  const products = [0, 1, 2, 4, 5];

  return (
    <Container>
      <Content>
        <Title>
          <h2>{title}</h2>
          <a>{linkTitle}</a>
        </Title>

        <ProductList>
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
    </Container>
  );
}