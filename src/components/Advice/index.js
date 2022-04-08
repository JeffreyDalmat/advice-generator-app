import PropTypes from 'prop-types';
import './advice.scss';

export default function Advice({ number }) {
  return (
    <h1 className={number ? 'advice--visible' : 'advice'}>Advice #{ number }</h1>
  );
}

Advice.propTypes = {
  number: PropTypes.number,
};

Advice.defaultProps = {
  number: false,
};
