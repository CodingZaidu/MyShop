import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js'; // Update extension
import reportWebVitals from './reportWebVitals.js'; // Update extension
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute.jsx'; // Update extension
import AdminRoute from './components/AdminRoute.jsx'; // Update extension
import HomeScreen from './screens/HomeScreen.jsx'; // Update extension
import ProductScreen from './screens/ProductScreen.jsx'; // Update extension
import CartScreen from './screens/CartScreen.jsx'; // Update extension
import LoginScreen from './screens/LoginScreen.jsx'; // Update extension
import RegisterScreen from './screens/RegisterScreen.jsx'; // Update extension
import ShippingScreen from './screens/ShippingScreen.jsx'; // Update extension
import PaymentScreen from './screens/PaymentScreen.jsx'; // Update extension
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx'; // Update extension
import OrderScreen from './screens/OrderScreen.jsx'; // Update extension
import ProfileScreen from './screens/ProfileScreen.jsx'; // Update extension
import OrderListScreen from './screens/admin/OrderListScreen.jsx'; // Update extension
import ProductListScreen from './screens/admin/ProductListScreen.jsx'; // Update extension
import ProductEditScreen from './screens/admin/ProductEditScreen.jsx'; // Update extension
import UserListScreen from './screens/admin/UserListScreen.jsx'; // Update extension
import UserEditScreen from './screens/admin/UserEditScreen.jsx'; // Update extension
import store from './store.js'; // Update extension
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListScreen />}
        />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
