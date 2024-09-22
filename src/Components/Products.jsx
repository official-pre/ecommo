import React, { useState } from "react";
import LatestProduct from "./LatestProduct";
import { Link, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const [price, setPrice] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);

    // Filter the data based on the selected price
    const filtered = filterdataa.reduce((acc, category) => {
      const matchingSkins = category.skins.filter(
        (skin) => skin.price <= selectedPrice
      );
      if (matchingSkins.length > 0) {
        acc.push({ ...category, skins: matchingSkins });
      }
      return acc;
    }, []);

    setFilteredData(filtered);
  };

  const filterdataa = [
    {
     
      catName: "Midas Touch", 
      skins: [
        {
          name: "Moulder",
          price: 1050,
          image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-moulder--top.jpg?v=1676535127&width=1080",
        },
        {
          name: "Golden Maze",
          price: 1299,
          image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-golden-swirl--top.jpg?v=1676535124&width=1080",
        },
        {
          name: "Bulbul",
          price: 1499,
          image: "https://www.layers.shop/cdn/shop/products/Lenovo_Ideapad_Gaming_3_bulbul_ef831f41-ce05-4d54-817a-98237fb3205e.png?v=1701679165&width=1080",
        },
        {
          name: "Chaos",
          price: 1599,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-chaos--top.jpg?v=1682503899&width=1080",
        },
      ],
    },
    {
    
      catName: "Dark",
      skins: [
        {
          name: "Cybermind",
          price: 1599,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-cybermind--top.jpg?v=1685096487&width=1080",
        },
        {
          name: "Spaceboy",
          price: 1499,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-spaceboy--top.jpg?v=1676535186&width=1080",
        },
        {
          name: "Space Blueprint",
          price: 1699,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-space-blueprint--back.jpg?v=1680092233&width=1080",
        },
        {
          name: "Escaping Earth",
          price: 1899,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-escaping-earth--top.jpg?v=1676535174&width=1080",
        },
        {
          name: "Charcoal Black",
          price: 1599,
          image: "https://www.layers.shop/cdn/shop/products/lenovo-ideapad-gaming-3-charcoal-black--top.jpg?v=1676535169&width=1080.shop/cdn/shop/products/Galaxy_S24_Ultra_Titanium.png?v=1706086067&width=1080",
        },
      ],
    },
    {
        catName: "Cyberforce",
        skins: [
          {
            name: "Hellgate red",
            price: 1499,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-hellgate-red--top.jpg?v=1676535127&width=1080",
          },
          {
            name: "Florescence",
            price: 1699,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-florescence--top.jpg?v=1676535124&width=1080",
          },
          {
            name: "Magma",
            price: 1799,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-magma--top.jpg?v=1682503248&width=1080",
          },
        ],
    },
    {
        catName: "Retro Funk",
        skins: [
          {
            name: "Empowher",
            price: 1799,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-empowher--top.jpg?v=1676535124&width=1080",
          },
          {
            name: "Astro Rainbow",
            price: 1749,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-astro-rainbow--top.jpg?v=1676535120&width=1080",
          },
          {
            name: "Wolfgang",
            price: 1699,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-wolfgang--top.jpg?v=1674543222&width=1080",
          },
          {
            name: "Grafitti",
            price: 1699,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-grafitti--top.jpg?v=1676535126&width=1080",
          },
          {
            name: "Dj Panda",
            price: 1549,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-dj-panda--top.jpg?v=1676535123&width=1080",
          },
        ],
    },
    {
        catName: "Wanderlust",
        skins: [
          {
            name: "Chaos",
            price: 1699,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-chaos--top.jpg?v=1682503890&width=1080",
          },
          {
            name: "Machina Hud",
            price: 1549,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-machina-hud--top.jpg?v=1685176589&width=1080",
          },
          {
            name: "Pink Aesthetic",
            price: 1499,
            image: "https://www.layers.shop/cdn/shop/products/asus-vivobook-14-2019-pink-aesthetic--top.jpg?v=1674544348&width=1080",
          },
          
        ],
    },
    
    ];

    console.log(filterdataa)
    console.log(filteredData)
  return (
    <div className="w-full min-h-screen flex items-start justify-between p-10">
      <aside className="w-[20%] h-full space-y-8">
        <h2 className="w-full text-xl pb-1 font-semibold text-center border-b-2 border-b-zinc-800">
          Filters
        </h2>
        <div className="w-full space-y-2">
          <h2 className="text-xl font-semibold">Category</h2>
          <section className="w-full flex flex-col gap-1">
            {filterdataa.map((item) => (
              <Link 
                to={`/products/${item.catName}`}
                state={{ item }}
                className="px-4 py-2 text-sm bg-zinc-100 rounded-md cursor-pointer"
                key={item.id}
              >
                {item.catName}
              </Link>
            ))}
          </section>
        </div>
        <div className="text-xl">
          <h2>Price</h2>
          <input
            type="range"
            step={50}
            className="w-full mt-2 in-range:border-green-500"
            onChange={handlePriceChange}
            min={300}
            max={1000}
          />
        </div>
        <div className="text-sm text-gray-600">
          Selected Price:{" "}
          <span className="font-medium text-gray-900">₹{price}</span>
        </div>
      </aside>
      <main className="w-full h-full px-10">
        {filteredData.length > 0 ? (
          filteredData.map((category) => (
            <div key={category.catName} className="w-full">
              <h2 className="text-2xl font-semibold mb-4">
                {category.catName}
              </h2>
              <div className=" flex justify-start items-center flex-wrap  gap-8">
                {category.skins.map((skin) => (
                  <div key={skin.name} className="w-[22%]">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={skin.image}
                        alt={skin.name}
                      />
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <h4 className="hover:underline">{skin.name}</h4>
                      <h5>₹{skin.price}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <section className="">
            <p className="text-lg w-full text-center mb-5">No products found within the selected price range.</p>
            <hr />
            <p className="text-lg w-full text-center mt-5">You can check our latest skins.</p>
            <LatestProduct />
          </section>
        )}
      </main>
      <Outlet />
    </div>
  );
};

export default Products;
