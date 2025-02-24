//import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 
import { BASE_URL } from '../constants.js';
// /home/mr-bot/Downloads/Vroshop-v2-main/frontend/node_modules/@reduxjs/toolkit/query/react
import { logout } from './authSlice.js'; // Import the logout action

// NOTE: code here has changed to handle when our JWT and Cookie expire.
// We need to customize the baseQuery to be able to intercept any 401 responses
// and log the user out
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout()); // Agar unauthorized hai to logout dispatch karo
  }

  return result;
};


export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth, // Fix applied here
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: () => ({}), // Endpoints inject honge
});

