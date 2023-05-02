import React from 'react'
import { Route } from "react-router-dom";
import AddItemDetails from './pages/AddItemDetails';
import Cart from './pages/Cart';
import CollapsedDetails from './pages/CollapsedDetails';
import Landing from './pages/Landing';
import Payment from './pages/Payment';
import ResturentDetails from './pages/ResturentDetails';
import ResturentList from './pages/ResturentList';

const routes = (
  <>
     <Route path="/" element={<Landing />}></Route>
     <Route path="/home" element={<ResturentList />}></Route>
     <Route path="/home/trending" element={<ResturentList />}></Route>
     <Route path="/cart" element={<Cart />}></Route>
     <Route path="/details/:id" element={<ResturentDetails />}></Route>
     <Route path="/items/:id" element={<AddItemDetails />}></Route>
     <Route path="/collapsed" element={<CollapsedDetails />}></Route>
     <Route path="/payment" element={<Payment />}></Route>
  </>
);

export default routes;