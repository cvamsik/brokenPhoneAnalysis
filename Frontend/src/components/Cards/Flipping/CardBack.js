import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardBack.css';

const FlippingCardBack = props => {
  return (
    <div className={styles['back']}>
      {props.children}
    </div>
  );
}

FlippingCardBack.propTypes = {
  children: PropTypes.node
};

export default FlippingCardBack;