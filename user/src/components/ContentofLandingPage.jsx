import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";

export default function ContentofLandingPage() {
  const products = useSelector((state) => {
    return state.productReducer.products;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-left h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl flex flex-col gap-y-5 self-end mb-36 ml-10">
          <p className="text-5xl font-bold">L003 Neo Sneakers</p>
          <span className="text-sm">A disruptive silhouette</span>
          <div className="flex w-full gap-3">
            <button className="bg-white hover:bg-black hover:text-white text-black rounded-3xl p-3 text-lg">
              Discover Now
            </button>
            <button className="bg-white hover:bg-black hover:text-white text-black rounded-3xl p-3 text-lg">
              Buy Now
            </button>
          </div>
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://static1.lacoste.com/videos/marketing/SS23_ID_neo-starter-desk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col mx-[56px]">
        <div>
          <span className="font-medium text-2xl">
            Lacoste seasonal wardrobe
          </span>
        </div>
        <div className="flex overflow-x-auto gap-8 mt-6">
          <div>
            <img
              className="max-w-[342px]"
              alt="catalog"
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dwbdd2861f/images/homepage/2023-02-23/3-PD_HP_SLIDER_DESK_732x1024px.jpg"
            ></img>
            <div className="mt-3 underline">Men's Polo</div>
          </div>
          <div>
            <img
              className="max-w-[342px]"
              alt="catalog"
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw6c436d8d/images/homepage/2023-02-23/2-PD_HP_SLIDER_DESK_732x1024px.jpg"
            ></img>
            <div className="mt-3 underline">Women's Polo</div>
          </div>
          <div>
            <img
              className="max-w-[342px]"
              alt="catalog"
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw5b24b3e7/images/homepage/2023-01-24/3a.jpg"
            ></img>
            <div className="mt-3 underline">T-shirt</div>
          </div>
          <div>
            <img
              className="max-w-[342px]"
              alt="catalog"
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw03dc50ac/images/homepage/2022-12-09/sw-desk.jpg"
            ></img>
            <div className="mt-3 underline">Sweatshirt</div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-20">
        <div className="w-7/12">
          <img
            src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dwc084f700/images/homepage/2023-02-23/PD_HP_DESK_STORY-(2135%C3%971546).jpg"
            alt="Gambar"
          ></img>
        </div>
        <div className="w-5/12 flex items-center justify-center">
          <div className="p-36 flex flex-col gap-3">
            <span className="text-xs">ALL DAY</span>
            <div className="text-xl font-semibold">Fashion Sport</div>
            <p className="text-left">
              Our new lifestyle? The fusion between trends and active
              silhouette. Sports bras, leggings, ergonomic sweaters, innovative
              trench coats, sporty sneakers... Lacoste invents Fashion Sport.
              For those that nothing stops.{" "}
            </p>
            <button className="btn btn-active rounded-3xl">Button</button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-6 mx-[56px] overflow-x-auto">
        {products.map((product) => {
          return (
            <div className="flex flex-col">
              <img
                className="max-w-[421px]"
                alt="catalog"
                src={product.mainImg}
              ></img>
              <Link to={`/detail/${product.slug}`}>{product.name}</Link>
              <span>Rp. {product.price}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <span className="px-[56px]">The Lacoste world</span>
        <div className="grid grid-cols-2 px-[56px] gap-10">
          <div className="h-[626px] object-cover relative">
            <div className="absolute top-80 left-12 w-2/3">
              <span>Created to shine on the court</span>
              <p>
                It’s all about the sporty vibes. Shop our original tennis
                apparel and Raline’s style here and only. #LAClubLacoste
              </p>
              <button className="bg-white text-black btn border-none rounded-3xl">
                Button
              </button>
            </div>
            <img
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw2566bccd/images/homepage/2023-02-23/4-PD_HP_BLOCKS-DESK.jpg"
              className="w-full object-cover"
            />
          </div>
          <div className="h-[626px] object-cover relative">
            <div className="absolute top-80 left-12 w-2/3">
              <span>Created to shine on the court</span>
              <p>
                It’s all about the sporty vibes. Shop our original tennis
                apparel and Raline’s style here and only. #LAClubLacoste
              </p>
              <button className="bg-white text-black btn border-none rounded-3xl">
                Button
              </button>
            </div>
            <img
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dwb300b7f9/images/homepage/2023-02-23/3-PD_HP_BLOCKS-DESK.jpg"
              className="w-full object-cover"
            />
          </div>
          <div className="h-[626px] object-cover relative">
            <div className="absolute top-80 left-12 w-2/3">
              <span>Created to shine on the court</span>
              <p>
                It’s all about the sporty vibes. Shop our original tennis
                apparel and Raline’s style here and only. #LAClubLacoste
              </p>
              <button className="bg-white text-black btn border-none rounded-3xl">
                Button
              </button>
            </div>
            <img
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw017589e5/images/homepage/2022-12-09/BLOCKS-DESK-3.jpg"
              className="w-full object-cover"
            />
          </div>
          <div className="h-[626px] object-cover relative">
            <div className="absolute top-80 left-12 w-2/3">
              <span>Created to shine on the court</span>
              <p>
                It’s all about the sporty vibes. Shop our original tennis
                apparel and Raline’s style here and only. #LAClubLacoste
              </p>
              <button className="bg-white text-black btn border-none rounded-3xl">
                Button
              </button>
            </div>
            <img
              src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw1d69af1e/images/homepage/2022-12-09/BLOCKS-DESK-4.jpg"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-[650px] bg-[#015551] mt-40 mr-4 flex">
        <div className="w-6/12 h-full mt-14 ml-[56px]">
          <h2 className="text-2xl font-bold text-white">Lacoste Inside</h2>
          <img
            className="mt-3"
            src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dwfe95f7fb/images/homepage/homepage-FW20-component-brand-block-savoirfaire-desk.jpg"
          />
        </div>
        <div className="w-6/12 relative">
          <div className="absolute bottom-20 ml-16 w-8/12 flex flex-col gap-2 text-white">
            <span>THE CROCODILE'S THREADS</span>
            <h2>Lacoste's Savoir-Faire</h2>
            <p>
              Production stages, unique materials and french savoir-faire:
              discover everything that goes behind the creation of your Lacoste
              polo.
            </p>
            <button className="w-40 rounded-3xl border-none p-3 bg-white text-black hover:text-white hover:bg-black">
              see the magic
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
