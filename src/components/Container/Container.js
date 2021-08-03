import Proptypes from 'prop-types';
import style from './Container.module.css';

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

Container.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Container;
