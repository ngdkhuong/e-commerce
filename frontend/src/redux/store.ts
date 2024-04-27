import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from './api/productAPI';
import { userAPI } from './api/userAPI';
import { userReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { orderApi } from './api/orderAPI';
import { dashboardApi } from './api/dashboardAPI';

export const server = import.meta.env.VITE_SERVER;
