import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 311px;
  button {
    visibility: hidden;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

export const SliderImage = styled.div`
  img {
    height: 311px;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  border: none;
  ${props => (props.left ? 'left: 0' : 'right: 0')};
  align-self: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #fff;
  width: 40px;
  border-radius: 5px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;
