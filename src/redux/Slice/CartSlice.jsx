import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },


    reducers:
    {
        addToCart: (state, action) => {

            const itemIndex = state.cart.find((item) => item.id === action.payload.id)

            if (itemIndex) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qnty: item.qnty + 1 } : item)
            }
            else {
                //state.cart.push(action.payload)
                state.cart = [...state.cart, action.payload]
            }

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((state) => state.id !== action.payload.id)
        },

        incrementqnty: (state, action) => {

       
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qnty: item.qnty + 1 } : item)
            
        },
        decrementqnty: (state, action) => {

      
            
                state.cart =  state.cart.map((item) => item.id === action.payload.id ? { ...item, qnty: item.qnty - 1 } : item)
            
        }
    }

})

export const { addToCart, removeFromCart, incrementqnty,decrementqnty } = CartSlice.actions
export default CartSlice.reducer;
