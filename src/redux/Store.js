import { configureStore, Tuple } from '@reduxjs/toolkit'
import cartSlice from './Slice/CartSlice';
import CategorySlice from './Slice/CategorySlice';
import SearchSlice from './Slice/SearchSlice';

 const Store = configureStore({
  reducer :{
    cartAll :cartSlice,
    category: CategorySlice,
    search:SearchSlice,
  },
});
export default Store;