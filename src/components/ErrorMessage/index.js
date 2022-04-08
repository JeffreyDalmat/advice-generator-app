import PropTypes from 'prop-types';
import './error.scss';

export default function ErrorMessage({ errorMessage }) {
  return (
    <p className="error">
      {errorMessage}
    </p>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
};
