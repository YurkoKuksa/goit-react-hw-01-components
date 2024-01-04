import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledThead,
  StyledTitles,
  StyledTr,
  StyledTrInfo,
} from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTable className="transaction-history">
      <StyledThead>
        <StyledTr>
          <StyledTitles>Type</StyledTitles>
          <StyledTitles>Amount</StyledTitles>
          <StyledTitles>Currency</StyledTitles>
        </StyledTr>
      </StyledThead>

      <StyledTbody>
        {transactions.map(item => (
          <StyledTrInfo key={item.id}>
            <StyledTd>{item.type}</StyledTd>
            <StyledTd>{item.amount}</StyledTd>
            <StyledTd>{item.currency}</StyledTd>
          </StyledTrInfo>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};
