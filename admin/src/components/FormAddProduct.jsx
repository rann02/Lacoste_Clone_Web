import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  fetchCategory,
  postProduct,
  fetchProductBySlug,
  editProduct,
} from "../store/actions/actionCreator";
import Swal from "sweetalert2";

export default function FormAddProduct() {
  // const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => {
    return state.categoryReducer.categories;
  });
  // const product = useSelector((state) => {
  //   return state.productReducer.product;
  // });

  const { state } = useLocation();
  const { slug, name, description, mainImg, categoryId, price } = state;
  // console.log(state);

  const [dataAddProduct, setDataAddProduct] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    imgUrls: [],
  });

  const [valueOfImage, setValueOfImage] = useState([
    {
      imgUrl: "",
    },
  ]);

  const handleAddImage = (e) => {
    e.preventDefault();

    let value = structuredClone(valueOfImage);
    value.push({
      imgUrl: "",
    });
    setValueOfImage(value);
  };

  const handleStateImgUrls = (idx, event) => {
    const clone = structuredClone(valueOfImage);
    clone[idx].imgUrl = event.target.value;
    setValueOfImage(clone);
  };

  const handleRemoveImage = (index) => {
    let value = structuredClone(valueOfImage);
    value.splice(index, 1);
    setValueOfImage(value);
  };

  const change = (e) => {
    const { name, value } = e.target;
    // console.log({name, value});

    setDataAddProduct({
      ...dataAddProduct,
      [name]: value,
    });
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      if (slug) {
        const data = await dispatch(
          editProduct({
            slug,
            dataProduct: dataAddProduct,
          })
        );
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          toast: true,
          title: `${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const data = await dispatch(
          postProduct({
            dataProduct: dataAddProduct,
            imgUrls: valueOfImage,
          })
        );
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Product has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Opss..`,
        text: `${error.message}`,
        toast: true,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
    if (slug) {
      // dispatch(fetchProductBySlug(slug));
      setDataAddProduct({
        name: name,
        description: description,
        price: price,
        mainImg: mainImg,
        categoryId: categoryId,
        imgUrls: [],
      });
      //   setDataAddProduct(product);
    }
  }, [slug]);

  // useEffect(() => {
  //   if (slug) {
  //     //   dispatch(fetchProductBySlug(slug));
  //   }
  // }, [slug]);

  // console.log(product);
  // console.log({dataAddProduct, valueOfImage});

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        className="w-6/12 gap-2 flex flex-col"
        onSubmit={handleSubmitProduct}
      >
        <label for="name">Name</label>
        <input
          onChange={change}
          name="name"
          value={dataAddProduct.name}
          id="name"
          className="input input-bordered input-info w-full"
          type="text"
        ></input>
        <label for="description">Description</label>
        <textarea
          onChange={change}
          name="description"
          value={dataAddProduct.description}
          id="description"
          className="textarea textarea-info"
          placeholder="description"
          type="textarea"
        ></textarea>
        <label for="price">Price</label>
        <input
          onChange={change}
          name="price"
          value={dataAddProduct.price}
          id="price"
          className="input input-bordered input-info w-full mt-1"
          type="number"
        ></input>
        <label for="category">Category</label>
        <select
          onChange={change}
          name="categoryId"
          value={dataAddProduct.categoryId}
          id="category"
          className="select select-info w-full"
        >
          <option disabled selected>
            Select One
          </option>
          {categories.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <label for="img">Img Url</label>
        <input
          onChange={change}
          name="mainImg"
          value={dataAddProduct.mainImg}
          id="img"
          className="input input-bordered input-info w-full"
          type="text"
        ></input>
        {valueOfImage.map((input, idx) => {
          return (
            <div className="flex items-start gap-2">
              <input
                value={input.imgUrl}
                name="imgUrls"
                onChange={(event) => {
                  event.preventDefault();
                  handleStateImgUrls(idx, event);
                }}
                type="text"
                placeholder="Additional image URL"
                className="input input-bordered w-full cursor-pointer"
              ></input>
              {idx === 0 ? (
                ""
              ) : (
                <label
                  className="bg-red-600 p-2 rounded-xl text-sm text-white cursor-pointer"
                  onClick={() => {
                    handleRemoveImage(idx);
                  }}
                  type="button"
                >
                  Remove
                </label>
              )}
            </div>
          );
        })}
        <div className="flex justify-between">
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleAddImage}
            onChange={change}
          >
            Add Image
          </button>
          <div className="flex gap-3">
            <button className="btn btn-outline" type="submit">
              Submit
            </button>
            <Link to={"/"} className="btn btn-outline btn-warning">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

<textarea className="textarea textarea-info" placeholder="Bio"></textarea>;
