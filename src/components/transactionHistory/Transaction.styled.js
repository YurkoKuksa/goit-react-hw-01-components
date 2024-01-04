import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 840px;
  background-color: #aaaaaa;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const StyledThead = styled.thead``;

export const StyledTr = styled.tr``;

export const StyledTitles = styled.th`
  color: #fff;
  background-color: teal;
  padding: 10px;
  font-size: 18px;
`;

export const StyledTbody = styled.tbody``;

export const StyledTrInfo = styled.tr`
  &:nth-child(odd) {
    background-color: #fdf8f8;
  }

  &:nth-child(even) {
    background-color: #e0e0e0;
  }
`;

export const StyledTd = styled.td`
  text-align: center;
  padding: 10px;
`;
