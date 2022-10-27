import React from 'react';
import css from './Friends.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

 const FriendList = ({ friends }) => {
 

  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
           <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}    
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  FriendListItem: PropTypes.arrayOf(PropTypes.shape({
    ...FriendListItem.propTypes,
    id: PropTypes.number.isRequired,
  }))
};


export default FriendList;