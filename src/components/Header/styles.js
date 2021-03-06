import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87px;
  background-color: #fff159;
  padding: 0.3rem 1rem;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 95%;
  }
  @media (min-width: 1450px) {
    width: 78%;
  }
  @media (min-width: 1650px) {
    width: 65%;
  }
  @media (min-width: 1950px) {
    width: 55%;
  }
  @media (min-width: 2300px) {
    width: 47%;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Logo = styled.div`
  @media (max-width: 1024px) {
    background: url('https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo__small.png')
      no-repeat;
    width: 39px;
    height: 28px;
  }
  background: url('https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo-pt__large_plus.png')
    no-repeat;
  height: 34px;
  top: 11px;

  width: 15%;
`;

export const SearchInput = styled.div`
  padding: 6px 1px;
  overflow: auto;
  flex-direction: row-reverse;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 2rem;
  overflow: hidden;
  background-color: #fff;
  border-radius: 2px;

  width: 85%;
  input {
    outline: none;
    border: none;
    flex: 1;
    font-size: 16px;
    padding-left: 10px;

    &::placeholder {
      opacity: 0.5;
      font-weight: lighter;
    }
  }

  button {
    border: none;
    height: 25px;
    outline: none;
    background-color: #fff;
    padding: 0.3rem 0.7rem;

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      border-left: 1px solid #ccc;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.1);
  }
`;

export const AppImage = styled.img`
  width: 340px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
  width: 15%;
`;

export const AddressInfo = styled.div`
  display: flex;
  padding-left: 3px;
  width: 100%;

  align-items: baseline;
  small {
    color: rgba(51, 51, 51, 0.6);
    font-size: 11px;
  }

  span {
    font-size: 11px;
    margin-left: 5px;
    color: rgba(51, 51, 51, 0.6);
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    small {
      color: rgba(51, 51, 51, 0.6);
      font-size: 11px;
    }

    span {
      font-size: 12px;
      margin-left: 0px;
      color: rgba(51, 51, 51, 0.9);
    }
  }
`;

export const NavMenu = styled.ul`
  @media (max-width: 1024px) {
    display: none;
  }
  flex: 1;
  display: flex;
  /* justify-content: space-between; */
  /* flex: 1; */
  list-style: none;
  margin: 0 2rem 0 2rem;
  width: 85%;
`;

export const NavMenuItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin: 0 0.5rem;
  cursor: pointer;
  span {
    font-size: 12px;
    margin-right: 3px;
    color: rgba(51, 51, 51, 0.6);
    &:hover {
      color: #000;
    }
  }
`;

export const RightMenu = styled.ul`
  @media (max-width: 1024px) {
    display: none;
  }
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const RightMenuItem = styled.li`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 12px;
    margin-right: 3px;
    color: rgba(51, 51, 51, 0.6);

    &:hover {
      color: #000;
    }
  }
`;
