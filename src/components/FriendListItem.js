import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';

function FriendListItem({ id, name, gender, starred, starFriend, deleteFriend }) {

  const handleStar = () => { starFriend(id); };
  const handleDelete = () => { deleteFriend(id); };

  return (
    <li className={styles.friendListItem}>
      <div className={styles.friendInfos}>
        <div><span>{name}</span></div>
        <div><span>{capitalize(gender)}</span></div>
        <div>
          <small>xx friends in common</small>
        </div>
      </div>
      <div className={styles.friendActions}>
        <button className={`btn btn-default ${styles.btnAction}`}
                onClick={handleStar}>
          <i className={classnames('fa', {
            'fa-star': starred,
            'fa-star-o': !starred
          })} />
        </button>
        <button className={`btn btn-default ${styles.btnAction}`}
                onClick={handleDelete}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem
