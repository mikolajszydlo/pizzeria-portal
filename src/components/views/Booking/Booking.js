import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Booking.module.scss';

const Booking = () => {
  const params = useParams();

  return (
    <div className = {styles.component}>
      <h2>Booking</h2>
      {params.id}
    </div>
  );
};

export default Booking;
