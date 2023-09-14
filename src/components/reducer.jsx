import { createReducer } from "@reduxjs/toolkit"; 

const cartReducer = createReducer({

    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,

},{
     addToCart:(state,action)=>{
        const item = action.payload;
        const isItemExist = state.cartItems.find((i)=> i.id === item.id);
        if (isItemExist){
           state.cartItems.forEach(i=>{
            if(i.id === item.id) i.quantity+=1;
           })
        }else{
                state.cartItems.push(item);
               
        }
     },
     
     
     decrement:(state,action) =>{
        const item1 = action.payload;
        const item = state.cartItems.find((i)=> i.id === item1);
        if(item.quantity > 1){
            state.cartItems.forEach(i=>{
                if(i.id === item.id) i.quantity -= 1;
            })
        }

     },
     deleteFromCart:(state,action) =>{
        const itemToDeleted = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemToDeleted);
 /*Using the filter Method:

The filter method is like a magic filter that goes through every item in the cartItems array, one by one.
For each item, it checks if the id of that item is not equal (!==) to the itemIdToDelete (the item's id you want to delete).


What Happens When the id Matches?:

If the id of the current item being checked is not the same as the itemIdToDelete, the item is kept in the new array that the filter method is creating.
However, if the id of the current item matches the itemIdToDelete, that item is skipped (filtered out) from the new array */
     },
     calculateprice:(state)=>{
        let sum =0;
        state.cartItems.forEach((i)=>{
                  sum += i.price * i.quantity;
        });

        state.subTotal = sum;
        state.shipping =  state.subTotal > 50 ? 0 : +(state.subTotal * 0.09).toFixed();
        state.tax = +(state.subTotal * 0.10).toFixed();  /* .tofixed:-round off decimal but returns string, */
        /**so at start + added to return it in number */
        state.total = state.subTotal + state.shipping + state.tax;

     },



});

export default cartReducer;