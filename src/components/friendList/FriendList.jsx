import { StyledList, StyledP, StyledWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledWrapper className="friend-list">
      {friends.map(friend => (
        <StyledList key={friend.id} className="item">
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <StyledP className="name">{friend.name}</StyledP>
        </StyledList>
      ))}
    </StyledWrapper>
  );
};
