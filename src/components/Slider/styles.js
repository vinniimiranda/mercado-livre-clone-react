import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  position: absolute;
  width: 100%;
  max-height: 340px;
  height: 100%;
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
    max-height: 340px;
    height: 100%;
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

export const Dots = styled.div`
  position: absolute;

  width: 200px;
  height: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  width: 10px
  height: 10px
  border-radius: 50%;
  background: ${props => (props.selected ? '#fff' : '#ccc')};
  opacity: ${props => (props.selected ? '1' : '0.8')};
  border: 1px solid #999;
  margin-left: 5px;
  cursor: pointer;
  transition: transform ease 0.3s;
  transform: ${props => (props.selected ? 'scalte(1)' : 'scale(0.5)')};
  

`;
