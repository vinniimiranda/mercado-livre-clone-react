import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Content = styled.div`
  background: #fff;
  margin: 2rem;
  border-radius: 3px;
  padding: 0.6rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;
export const FirstContent = styled.div`
  border-left: 4px solid #3483fa;
  border-right: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;

  span {
    font-size: 16px;
  }
  small {
    margin-top: 0.2rem;
    color: #999;
    font-size: 12px;
  }
`;
export const SecondContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;
export const ThirdContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;
export const FourthContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
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
    font-size: 16px;
  }
  a {
    margin-top: 0.2rem;
    cursor: pointer;
    color: #3483fa;
    font-size: 12px;
  }
`;
