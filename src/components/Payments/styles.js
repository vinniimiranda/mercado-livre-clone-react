import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  align-items: center;
  @media (max-width: 1120px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  background: #fff;
  margin: 1rem 2rem;
  border-radius: 3px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  padding: 0.2rem;
  @media (max-width: 970px) {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    max-width: 420px;
    margin: 1rem;
  }

  @media (max-width: 1120px) {
    width: 100%;
  }
`;
export const FirstContent = styled.div`
  border-left: 4px solid #3483fa;
  border-right: 1px solid #ddd;
  padding: 1rem;
  display: flex;

  flex-direction: column;
  margin: 0 1rem 0 0;
  white-space: nowrap;
  span {
    font-size: 16px;
  }
  small {
    margin-top: 0.2rem;
    color: #999;
    font-size: 12px;
  }

  @media (max-width: 970px) {
    display: none;
  }
`;
export const SecondContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;
export const ThirdContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;
export const FourthContent = styled.div`
  align-items: center;
  margin-right: 2rem;
  display: none;

  @media (min-width: 1120px) {
    display: flex;
  }
`;

export const Round = styled.div`
  border: 1px solid #ddd;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  span {
    white-space: nowrap;
    font-size: 16px;
  }
  a {
    margin-top: 0.2rem;
    cursor: pointer;
    color: #3483fa;
    font-size: 12px;
  }
`;
