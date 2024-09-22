import React from "react";
import { useNavigate } from "react-router-dom";

function LatestProduct({col}) {
  const latestProductData = [
    { name: "Bulbul", price: 1399, image: "https://www.layers.shop/cdn/shop/products/Lenovo_Ideapad_Gaming_3_bulbul_ef831f41-ce05-4d54-817a-98237fb3205e.png?v=1701679165&width=1080" },
    { name: "Chaos", price: 1359, image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-chaos--top.jpg?v=1682503899&width=1080" },
    { name: "Golden Maze", price: 1429, image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-golden-swirl--top.jpg?v=1676535124&width=1080" },
    { name: "Moulder", price: 1499, image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-moulder--top.jpg?v=1676535127&width=1080" },
    { name: "Cybermind", price: 1419, image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-cybermind--top.jpg?v=1685096487&width=1080" },
    { name: "Spaceboy", price: 1799, image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-spaceboy--top.jpg?v=1676535186&width=1080" },
    { name: "Space Blueprint", price: 1479, image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-space-blueprint--back.jpg?v=1680092233&width=1080" },
    { name: "Escaping Earth", price: 1579, image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-escaping-earth--top.jpg?v=1676535174&width=1080" },
    { name: "Hellgate red", price: 1599, image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-hellgate-red--top.jpg?v=1676535127&width=1080" },
  ];

  const navigate = useNavigate();

  const handleClick = (product) => {
    return navigate(`/product/${product.name}`, { state: { product } });
  };

  return (
    <>
      <div className="w-full min-h-96 flex flex-col items-center p-5 pt-10 gap-5">
        <h1 className="text-2xl font-semibold">Latest Skins</h1>
        <div className={`flex flex-wrap items-center justify-center gap-8 px-12`}>
          {latestProductData.map((product, index) => (
            console.log(product)
            
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
