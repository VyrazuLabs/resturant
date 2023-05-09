import React from 'react'
import { Route } from "react-router-dom";
import { routesName } from './config/RoutesName';
import { ResturentList, AddItemDetails, RestaurentCategoryList, RestaurentItems, CartList, PaymentOtpVerification } from './pages';
import CollapsedDetails from './pages/CollapsedDetails';
import Landing from './pages/Landing';
import Payment from './pages/Payment';


const routes = (
  <>
    <Route path="/" element={<Landing />}></Route>
    <Route path={routesName.Home} element={<ResturentList />}></Route>
    <Route path="/home/trending" element={<ResturentList />}></Route>
    <Route path={routesName.Cart} element={<CartList />}></Route>
    <Route path={routesName.Details + '/:id'} element={<RestaurentItems />}></Route>
    {/* ResturentDetails */}
    <Route path={routesName.Category + '/:id'} element={<RestaurentCategoryList />}></Route>
    <Route path={routesName.AddItem + '/:id'} element={<AddItemDetails />}></Route>
    <Route path={routesName.Otp} element={<PaymentOtpVerification />}></Route>
    <Route path="/collapsed" element={<CollapsedDetails />}></Route>
    <Route path={routesName.Payment} element={<Payment />}></Route>
  </>
);

export default routes;