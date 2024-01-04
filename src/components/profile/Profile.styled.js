import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: lightgray;
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 20px;
`;

export const StyledDescription = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  width: 500px;

  outline: 1px solid red;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  outline: 1px solid #fff;
  width: 300px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  display: block;
`;

export const StyledUsername = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: darkblue;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #686868;

  text-align: center;
`;

export const StyledStats = styled.ul`
  margin: 0 auto;
  color: gray;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 270px;
  border: 1px solid #e0e0e0;
  background-color: #fdf8f8;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;
  border: 1px solid #e0e0e0;
  padding: 20px;
  min-width: 50px;
`;

export const StyledLabel = styled.span`
  font-style: italic;
  text-align: center;
`;

export const StyledValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-align: center;
`;
