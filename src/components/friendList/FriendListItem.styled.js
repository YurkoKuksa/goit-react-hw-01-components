import styled from 'styled-components';

export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;

export const List = styled.li`
  padding: 10px;
  /* outline: 1px solid red; */
  width: 200px;
  margin-top: 20px;
`;

export const Element = styled.span`
  display: block;
  margin-left: 30px;
  margin-bottom: -30px;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.element ? 'green' : 'red')};
  border-radius: 50%;

  /* &::before {
    content: '';
    position: absolute;
    left: -30px;
    bottom: 65px;
    height: 15px;
    width: 30%;
    background-color: ${props => (props.element ? 'green' : 'red')};

    border-radius: 50%;
  } */
`;

export const NameParagraph = styled.p`
  color: green;
  text-align: center;
  margin: 5px 0 0 0;
`;
