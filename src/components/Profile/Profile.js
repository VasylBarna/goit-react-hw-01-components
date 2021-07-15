import PropTypes from 'prop-types';

const Profile = ({ name, title, avatar, tag, location, stats }) => {
  return (
    <div className="Profile">
      <div className="Description">
        <img src={avatar} alt={title} className="Avatar" />
        <p className="Name">{name}</p>
        <p className="Tag">{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li>
          <span className="Label">Followers</span>
          <span className="Quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="Label">Views</span>
          <span className="Quantity">{stats.views}</span>
        </li>
        <li>
          <span className="Label">Likes</span>
          <span className="Quantity">{stats.likes}</span>
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
  title: PropTypes.string.isRequired,
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
