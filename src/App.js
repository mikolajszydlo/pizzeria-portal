import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Order from './components/views/Order/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path = {`${process.env.PUBLIC_URL}`} element = {<Dashboard />} />
            <Route path = {`${process.env.PUBLIC_URL}/login`} element = {<Login />} />
            <Route path = {`${process.env.PUBLIC_URL}/tables`} element = {<Tables />} />
            <Route path = {`${process.env.PUBLIC_URL}/tables/booking/new`} element = {<Booking />} />
            <Route path = {`${process.env.PUBLIC_URL}/tables/booking/:id`} element = {<Booking />} />
            <Route path = {`${process.env.PUBLIC_URL}/tables/events/new`} element = {<Event />} />
            <Route path = {`${process.env.PUBLIC_URL}/tables/events/:id`} element = {<Event />} />
            <Route path = {`${process.env.PUBLIC_URL}/waiter`} element = {<Waiter />} />
            <Route path = {`${process.env.PUBLIC_URL}/waiter/order/new`} element = {<Order />} />
            <Route path = {`${process.env.PUBLIC_URL}/waiter/order/:id`} element = {<Order />} />
            <Route path = {`${process.env.PUBLIC_URL}/kitchen`} element = {<Kitchen />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
