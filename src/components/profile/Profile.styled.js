import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: lightgray;
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const StyledDescription = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  width: 315px;

  /* outline: 1px solid red; */
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  outline: 1px solid #fff;
  width: 300px;
  height: auto;
`;

export const StyledUsername = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: darkblue;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #686868;
  margin-right: 50px;
  margin-left: auto;
`;

export const StyledStats = styled.ul`
  margin: 0 auto;
  color: gray;
  list-style-type: none;

  display: flex;
  gap: 30px;
  justify-content: center;
  /* outline: 1px solid red; */
  width: 230px;
`;

export const StyledList = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const StyledLabel = styled.span`
  font-style: italic;

  margin: 0 auto;
`;

export const StyledValue = styled.span`
  margin: 0 auto;
  font-size: 17px;
`;
