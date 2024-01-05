import styled from 'styled-components';

export const StyledStat = styled.section`
  width: 800px;
  background-color: #aaaaaa;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(5)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const StyledTitle = styled.h2`
  color: green;
  text-align: center;
  background-color: #e0e0e0;
  padding: 10px;
  margin: 0 auto;
  width: 300px;
`;

export const StyleStatList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  width: 320px;
  gap: 0;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
  text-align: center;
  padding: 10px;
  color: #fff;
  width: 50px;

  /* &:nth-child(1) {
    background-color: darkmagenta;
  }

  &:nth-child(2) {
    background-color: red;
  }

  &:nth-child(3) {
    background-color: blue;
  }

  &:nth-child(4) {
    background-color: green;
  }

  &:nth-child(5) {
    background-color: orange;
  } */

  &:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.darkMagenta};
  }

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.crimson};
  }

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }

  &:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.green};
  }

  &:nth-child(5) {
    background-color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

export const StyledLabel = styled.span`
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
`;

export const StyledPercentage = styled.span`
  margin-left: auto;
  margin-right: auto;

  font-size: 17px;
`;
