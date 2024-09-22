import React from 'react';
import Categories from "./Categories";
import LatestProduct from "./LatestProduct";
import { useNavigate } from 'react-router-dom';

 

const CategoryPage = () => {

    const filterdata = [
      {
        id: 1,
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
        id: 2,
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
    
    const navigate = useNavigate();

    const handleClick = (item) => {
      return (
        navigate(`/products/${item.catName}`, { state: { item } })
    )
    };

    return (
        <div className='w-full min-h-screen'>
            <Categories />
            <section className='w-full h-full flex flex-col items-center justify-center gap-5'>
              <h1 className="text-2xl font-semibold">Categories</h1>
              <section className='w-[80%] px-10 flex items-center justify-center flex-wrap gap-10'>
                {filterdata.map((item,index)=>(
                  <section onClick={() => handleClick(item)} className='w-48 bg-zinc-300 rounded flex flex-col border-2 border-black shadow-br items-center justify-center cursor-pointer'>
                    <section className='h-40 w-full overflow-hidden px-10'>
                      <img className='h-32 object-center scale-[4]' src={item.skins[0].image} alt="" />
                    </section>
                    <section className='w-full px-2'>
                      <h2 className='text-center text-lg font-semibold'>{item.catName}</h2>
                      <p className='text-justify text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum.</p>
                    </section>
                  </section>
                ))}
                
              </section>
            </section>
            <LatestProduct />
        </div>
    );
}

export default CategoryPage;
