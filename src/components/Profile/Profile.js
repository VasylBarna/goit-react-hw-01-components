import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  name: 'User name',
  tag: 'User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '',
    views: '',
    likes: '',
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.any.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
