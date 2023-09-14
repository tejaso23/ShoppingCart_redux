import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
 
  const dispatch = useDispatch();
  const { cartItems,subTotal,shipping,tax,total} = useSelector((state) => state.cart);
  const increment = (id) => {
    dispatch({ type: "addToCart",
     payload: { id } });
     dispatch({ type: "calculateprice" });
  };

  const decrement = (id) => {
    dispatch({ type: "decrement",
     payload:  id  });
     dispatch({ type: "calculateprice" });
  };

  const deleteHandler = (id) => {
    dispatch({ type: "deleteFromCart",
    payload:  id  });
    dispatch({ type: "calculateprice" });
  };

 
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              id={i.id}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              img={i.img}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
              key={i.id}
            ></CartItem>
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  );
};
const CartItem = ({
  id,
  name,
  price,
  qty,
  img,
  decrement,
  increment,
  deleteHandler,
}) => {
  return (
    <>
      {" "}
      <div className="cartItem">
        <img src={img}></img>
        <article>
          <h3>{name}</h3>
          <p>${price}</p>
        </article>
        <div>
          <button onClick={() => decrement(id)}>-</button>
          <p>{qty}</p>
          <button onClick={() => increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deleteHandler(id)}></AiFillDelete>
      </div>
    </>
  );
};
export default Cart;
