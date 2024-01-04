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
      <StyledStats className="stats">
        <StyledList>
          <StyledLabel className="label">Followers</StyledLabel>
          <StyledValue className="quantity">{stats.followers}</StyledValue>
        </StyledList>
        <StyledList>
          <StyledLabel className="label">Views</StyledLabel>
          <StyledValue className="quantity">{stats.views}</StyledValue>
        </StyledList>
        <StyledList>
          <StyledLabel className="label">Likes</StyledLabel>
          <StyledValue className="quantity">{stats.likes}</StyledValue>
        </StyledList>
      </StyledStats>
    </StyledWrapper>
  );
};
