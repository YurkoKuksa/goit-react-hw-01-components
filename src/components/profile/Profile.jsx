import {
  StyledAvatar,
  StyledDescription,
  StyledLabel,
  StyledList,
  StyledParagraph,
  StyledStats,
  StyledUsername,
  StyledValue,
  StyledWrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, avatar, stats, location }) => {
  return (
    <StyledWrapper>
      <StyledDescription>
        <StyledAvatar src={avatar} alt={username} />
        <StyledUsername>{username}</StyledUsername>
        <StyledParagraph>{tag}</StyledParagraph>
        <StyledParagraph>{location}</StyledParagraph>
      </StyledDescription>
      <StyledStats>
        <StyledList>
          <StyledLabel>Followers</StyledLabel>
          <StyledValue>{stats.followers}</StyledValue>
        </StyledList>
        <StyledList>
          <StyledLabel>Views</StyledLabel>
          <StyledValue>{stats.views}</StyledValue>
        </StyledList>
        <StyledList>
          <StyledLabel>Likes</StyledLabel>
          <StyledValue>{stats.likes}</StyledValue>
        </StyledList>
      </StyledStats>
    </StyledWrapper>
  );
};
