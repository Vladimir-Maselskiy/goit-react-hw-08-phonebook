import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 500px;
  min-height: 300px;
  margin: 0 auto;
  background-color: ${props => props.theme.backgroundColor.primary};
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${props => props.theme.color};
  text-align: center;
  border: solid 1px #ccc;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
`;
