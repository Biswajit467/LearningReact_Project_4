import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MPHE3HN-A-Laptop-493664953-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjUwNXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaGMyLzk5NTAxNzY2MDgyODYuanBnfGY5NTc1NzJlNGJlNGViOTkyZDBiZjBkYTUxMTVkYmM3OTc2NjIyYTBhMzU5ZGFlYzA2NDM4MmFjNTQ5YmQ4OGI";

const img2 =
  "https://cdn.shopify.com/s/files/1/0584/2770/3448/products/formal-boys-shoes-footwear5-black-1.jpg?v=1676958843&width=720";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 1200,
      imgSrc: img1,
      id: "lajflkaalkjfljalskjflaj",
    },
    {
      name: "Black Shose",
      price: 490,
      imgSrc: img2,
      id: "labisfaljflkaalsljljakfhkkjfljalskjflaj",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          id={i.id}
          name={i.name}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, quantity: 1, id, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
