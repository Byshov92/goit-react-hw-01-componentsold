import PropTypes from 'prop-types';
import css from '../friendList/FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
    <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
            />
        ))}
    </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
    ),
};