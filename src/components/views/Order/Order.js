import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Order.module.scss';


const Order = () => {
  const params = useParams();

  return (
    <div className = {styles.component}>
      <h2>Order</h2>
      {params.id}
    </div>
  );
};


export default Order;
