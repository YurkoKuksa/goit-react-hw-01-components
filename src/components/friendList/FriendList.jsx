import {
  StyledList,
  StyledP,
  StyledPicture,
  StyledWrapper,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledWrapper>
      {friends.map(friend => (
        <StyledList key={friend.id} bg={friend.isOnline}>
          <StyledPicture src={friend.avatar} alt={friend.name} width="48" />
          <StyledP>{friend.name}</StyledP>
        </StyledList>
      ))}
    </StyledWrapper>
  );
};
