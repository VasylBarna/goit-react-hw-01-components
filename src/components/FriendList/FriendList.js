import FriendListItem from './components/FriendListItem';
import PropTypes from 'prop-types';
import style from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
