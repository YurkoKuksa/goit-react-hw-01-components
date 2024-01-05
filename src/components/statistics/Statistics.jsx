import {
  StyleStatList,
  StyledLabel,
  StyledList,
  StyledPercentage,
  StyledStat,
  StyledTitle,
} from './Statistic.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StyledStat>
      {title && <StyledTitle>{title}</StyledTitle>}
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
