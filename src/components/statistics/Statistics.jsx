import {
  StyleStatList,
  StyledLabel,
  StyledList,
  StyledPercentage,
  StyledStat,
  StyledTitle,
} from './Statistic.styled';

export const Statistics = ({ data }) => {
  return (
    <StyledStat>
      <StyledTitle>Upload stats</StyledTitle>
      <StyleStatList>
        {data.map(item => (
          <StyledList key={item.id}>
            <StyledLabel>{item.label}</StyledLabel>
            <StyledPercentage>{item.percentage} %</StyledPercentage>
          </StyledList>
        ))}
      </StyleStatList>
    </StyledStat>
  );
};
