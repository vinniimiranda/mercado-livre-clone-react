import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  margin: 1rem 2rem;
  border-radius: 3px;
  padding: 0.6rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;

  align-items: baseline;
  align-self: flex-start;
  h2 {
    font-weight: lighter;
  }
  a {
    color: #3483fa;
    margin-left: 1rem;
  }
`;

export const ProductList = styled.ul`
  flex: 1;
  align-self: flex-start;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  overflow: hidden;
  @media (max-width: 1200px) {
    max-width: 1050px;
  }

  @media (max-width: 1060px) {
    max-width: 880px;
  }

  @media (max-width: 800px) {
    max-width: 640px;
  }
  @media (max-width: 600px) {
    max-width: 440px;
  }
`;

export const Detail = styled.div`
  display: flex;
  visibility: hidden;
  transform-origin: left top;
  margin-top: 1rem;
  flex-wrap: wrap;
  height: 0px;

  transition: height ease 0.1s;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  
  width: 210px;
  height: 310px;
  padding: 1rem 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: height ease 0.1s;
  img {
    border-bottom: 1px solid #eee;
    padding 0 1rem;
    width: 100%;
    height: 17vh;
    align-self: center;
    
  }

  > span {
    font-weight: 400;
    color: #666;
    font-size: 22px;
    padding: 1rem 2rem 0.1rem 2rem;
  }
  small {
    padding: 0 2rem;
  }

  &:hover {
    box-shadow: 0 1px 10px 8px rgba(0, 0, 0, 0.1);
    height: 323px;
    ${Detail} { 
      visibility: visible;
      
    }
  }
`;
