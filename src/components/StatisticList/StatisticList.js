import PropTypes from 'prop-types';

const StatisticList = ({ label, percentage }) => (
  <>
    <span className={'style.label'}>{label}</span>
    <span className={'style.percentage'}>{percentage}%</span>
  </>
);

StatisticList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticList;
