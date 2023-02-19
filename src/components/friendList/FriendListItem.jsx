import css from '../friendList/FriendList.module.css';
import { PropTypes } from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <li className={css.items}>
        {isOnline ? (
        <span className={css.isOnline}></span>) : (
        <span className={css.offline}></span>)}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    );
};
FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
