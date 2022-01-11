import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.module.scss';


const Tables = () => (
  <div className = {styles.component}>
    <h2>Tables</h2>
    <Link to = {`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
    <Link to = {`${process.env.PUBLIC_URL}/tables/booking/booking1`}>Booking 1</Link>
    <Link to = {`${process.env.PUBLIC_URL}/tables/events/new`}>New booking</Link>
    <Link to = {`${process.env.PUBLIC_URL}/tables/events/event1`}>Event 1</Link>
  </div>
);

export default Tables;
