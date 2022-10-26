import React from 'react';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

 const FriendListItem = ({ friends }) => {
 

  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friends__item} key={id}>
            <span className={`${css.friends__status} ${css[isOnline]}`}>
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.friends__name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendListItem.propTypes = {
  FriendListItem: PropTypes.arrayOf(PropTypes.shape({
    ...FriendListItem.propTypes,
    id: PropTypes.number.isRequired,
  }))
};


export default FriendListItem;