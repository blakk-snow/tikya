import PropTypes from 'prop-types';

export const SetPropTypes = PropTypes.shape({
  cards: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.any
});

export const CardPropTypes = PropTypes.shape({
  answer: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  image: PropTypes.any,
  set: PropTypes.string.isRequired
});