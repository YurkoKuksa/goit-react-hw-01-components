import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  width: 800px;
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  color: red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`;

// export const StyledElement = styled.span``;

export const StyledPicture = styled.img`
  display: block;
`;

export const StyledList = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -30px;
    bottom: 65px;
    height: 15px;
    width: 30%;
    background-color: ${props => (props.bg ? 'green' : 'red')};

    border-radius: 50%;
  }
`;

export const StyledP = styled.p`
  color: green;
`;
