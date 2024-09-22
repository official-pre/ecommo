import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const filterdata = [
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
  const navigate = useNavigate()
  const navigateSearch = (e)=>{
    let res = e.target.value;
    navigate('/search',{state:{res, filterdata}})
  }
  

  return (
    <nav className="w-full h-[10vh] bg-[#3a625f] flex items-center justify-between px-10">
      <div className="w-2/5 flex items-center justify-between">
        <h1 className="uppercase font-semibold text-2xl cursor-pointer text-white">
          Ecommo
        </h1>
        <NavLink 
        className={(e)=> {
          return [
            e.isActive === false ? "text-sm font-medium text-white " : "",
            e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",

          ].join(" ");
        }} 
        to="/">
          Home
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          to="/categorypage"
          
        >
          Category
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          to="/about"
        >
          About us
        </NavLink>
      </div>
      <div className="w-1/3 flex items-center relative max-w-[300px]">
        <svg 
          className="absolute left-4 fill-[#9e9ea7] w-4 h-4"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          onInput={navigateSearch}
          className="w-full h-10 pl-10 pr-4 border-2 border-transparent rounded-lg outline-none bg-[#f3f3f4] text-[#0d0c22] transition ease-in duration-300 placeholder-[#9e9ea7] focus:border-[rgba(152,230,254,0.4)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(247,216,228,0.1)]"
        />
      </div>
      <div className="flex items-center justify-between gap-5">
        <NavLink
          to="/cart"
          className="flex items-start justify-center text-white no-underline"
          title="Cart"
        >
          <img
            className="h-6"
            src="https://img.icons8.com/?size=100&id=rPCAH753HAqD&format=png&color=000000"
            alt=""
          />
          {/* <sup className="bg-[#dc1425] px-2 py-2 rounded-[7px] ml-1">0</sup> */}
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white no-underline"
          title="Contact us"
        >
          <img
            className="h-6"
            src="https://img.icons8.com/?size=100&id=W2i9VMhMFvHm&format=png&color=000000"
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
