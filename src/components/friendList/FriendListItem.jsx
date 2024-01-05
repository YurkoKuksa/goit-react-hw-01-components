import { Element, List, NameParagraph, Picture } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <List key={id}>
      <Element element={isOnline}></Element>
      <Picture src={avatar} alt={name} width="48" />
      <NameParagraph>{name}</NameParagraph>
    </List>
  );
};
