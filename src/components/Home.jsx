import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const Home = () => {
  const ProductList = [
    { name: "Mac Book", Price: "123", id: 1, img: img1 },
    { name: "Shoes", Price: "20", id: 2, img: img2 },
  ];

  const dispatch = useDispatch();

  const addTohandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculateprice" });
    console.log(options);
    toast.success("Added To Cart");
  };
  return (
    <>
      <div className="home">
        {ProductList.map((i) => (
          <Productcard
            key={i.id}
            img={i.img}
            name={i.name}
            price={i.Price}
            handler={addTohandler}
            id={i.id}
          ></Productcard>
        ))}
      </div>
    </>
  );
};
const Productcard = ({ name, id, price, handler, img }) => {
  return (
    <div className="ProductCard">
      <img src={img}></img>
      <p>{name}</p>
      <h3>${price}</h3>
      <button onClick={() => handler({ name, id, price, quantity: 1, img })}>
        Add To Cart
      </button>
    </div>
  );
};
export default Home;
