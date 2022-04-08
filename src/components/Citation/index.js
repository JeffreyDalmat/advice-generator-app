import PropTypes from 'prop-types';
import './citation.scss';

export default function Citation({ id, advice }) {
  return (
    <p key={id} className="citation">
      {advice}
    </p>
  );
}

Citation.propTypes = {
  id: PropTypes.number,
  advice: PropTypes.string.isRequired,
};

Citation.defaultProps = {
  id: null,
};
