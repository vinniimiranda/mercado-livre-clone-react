import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 360px;
  width: 1230px;
  align-self: center;
  margin-left: 2rem;
  overflow: hidden;
`;

export const Content = styled.div`
  margin: 1rem 2rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 500%;
  overflow: hidden;
  @media (max-width: 425px) {
    margin: 1rem;
  }
`;

export const Title = styled.div`
  display: flex;

  align-items: baseline;
  align-self: flex-start;
  h2 {
    font-size: 1.5rem;
    font-weight: lighter;
  }
  a {
    color: #3483fa;
    cursor: pointer;
    margin-left: 1rem;
  }
`;

export const ProductList = styled.ul`
  position: relative;
  flex: 1;
  left: 0;
  width: 100%;
  transform: translateX(-${props => props.x}%);
  transition: transform ease 0.9s;

  flex: 1;
  align-self: flex-start;
  margin-top: 1rem;
  display: flex;
  height: 330px;
  z-index: 1;

  /* @media (max-width: 1200px) {
    max-width: 1050px;
  }

  @media (max-width: 1024px) {
    max-width: 880px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 600px) {
    max-width: 410px;
  }

  @media (max-width: 375px) {
    max-width: 200px;
  } */
`;

export const Detail = styled.div`
  display: flex;
  visibility: hidden;
  margin-top: 1rem;
  flex-wrap: wrap;
  height: 0px;

  transition: height ease 0.1s;

  small {
    font-size: 11px;
    word-break: break-all;
  }
`;

export const Product = styled.li`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 210px;
  min-width: 210px;
  height: 250px;
  margin: 0 1rem 0 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: height ease 0.15s;
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
    box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.1);
    height: 313px;
    ${Detail} { 
      visibility: visible;
      
    }
  }
`;

export const NextButton = styled.button`
  width: 64px;
  min-width: 64px;
  height: 64px;
  display: flex;
  background-color: #fff;
  border-radius: 50%;
  border-width: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  outline: 0;
  position: relative;
  right: 64px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
