import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsBySlug } from "../store/actions/actionCreator";

export default function Detail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => {
    return state.productReducer.product;
  });

  useEffect(() => {
    dispatch(fetchProductsBySlug(slug));
  }, []);

  if (!product) {
    return <></>;
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full flex">
        <div className="w-6/12 ml-2">
          <div className="h-[683px] relative">
            <div className="mb-2">
              <span>
                <Link to={"/"}>Home</Link> / Men / Men’s Lacoste Classic Fit
                Crew Neck Fleece Sweatshirt
              </span>
            </div>
            <img
              className="max-h-[670px]"
              alt="catalog"
              src={product.mainImg}
            ></img>
            <div className="absolute flex flex-col top-56 gap-1 left-2">
              {product.Images?.map((img) => {
                return (
                  <div className="opacity-50 hover:opacity-100">
                    <img
                      className="max-h-[48px]"
                      alt="catalog"
                      src={img.imgUrl}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-6/12 flex justify-center items-center">
          <div className="w-[512px] gap-y-5 flex flex-col">
            <h1>{product.name}</h1>
            <div className="flex justify-between">
              <p className="flex gap-x-4">
                <img
                  className="rounded-full"
                  alt="Gambar"
                  src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Sites-master/en_ID/dwce60309a/swatch_0100-LACSH2564_EL6_24.jpg"
                ></img>
                <span>ABU-ABU • EL6</span>
              </p>
              <span>Rp{product.price}</span>
            </div>
            <div>
              <h2>4 colours</h2>
              <div className="flex gap-x-3">
                <img
                  className="rounded-full"
                  src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Sites-master/en_ID/dwc0f30812/swatch_0100-LACSH2564_001_24.jpg"
                ></img>
                <img
                  className="rounded-full"
                  src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Sites-master/en_ID/dwbb1a68dd/swatch_0100-LACSH2564_166_24.jpg"
                ></img>
                <img
                  className="rounded-full"
                  src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Sites-master/en_ID/dw8cfa6f32/swatch_0100-LACSH2564_CCA_24.jpg"
                ></img>
                <img
                  className="rounded-full"
                  src="https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Sites-master/en_ID/dwce60309a/swatch_0100-LACSH2564_EL6_24.jpg"
                ></img>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-black hover:bg-white hover:text-black text-white rounded-3xl p-2 text-m border-2">
                Select Size
              </button>
              <a className="cursor-pointer text-sm">Find your size</a>
            </div>
            <button className="bg-black hover:bg-white hover:text-black text-white rounded-3xl p-3 text-lg border-2">
              Add to shopping bag
            </button>
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold text-center">
                  Description
                </div>
                <p className="text-left">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
