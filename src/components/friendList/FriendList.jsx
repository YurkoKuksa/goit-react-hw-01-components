import { Wrapper } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(item => (
        <FriendListItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

// export const FriendList = ({ friends }) => {
//   return (
//     <StyledWrapper>
//       {friends.map(friend => (
//         <StyledList key={friend.id} bg={friend.isOnline}>
//           <span></span>
//           <StyledPicture src={friend.avatar} alt={friend.name} width="48" />
//           <StyledP>{friend.name}</StyledP>
//         </StyledList>
//       ))}
//     </StyledWrapper>
//   );
// };
