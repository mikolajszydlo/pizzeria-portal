import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Event.module.scss';

const Event = () => {
  const params = useParams();

  return (
    <div className = {styles.component}>
      <h2>Event</h2>
      {params.id}
    </div>
  );
};

export default Event;
