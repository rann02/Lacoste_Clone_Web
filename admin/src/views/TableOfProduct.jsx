import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts, deleteProduct } from "../store/actions/actionCreator";
// import ImagesPage from "../components/ImagesPage";

export default function TableOfProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.productReducer.products;
  });

  const handleDelete = async (event, slug) => {
    console.log(slug);
    event.preventDefault();
    try {
      const data = await dispatch(deleteProduct(slug));
      await dispatch(fetchProducts());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log(value);

  // console.log(products, '<<< redux');
  return (
    <section className="bg-slate-100 rounded-2xl shadow-2xl px-10 pb-10">
      <div className="flex items-center justify-between p-5">
        <h1 className="font-extrabold text-4xl text-blue-400">Product</h1>
        <button
          onClick={() => {
            navigate(`/newProduct`, {
              state: {
                slug: "",
                name: "",
                description: "",
                price: "",
                mainImg: "",
                categoryId: "",
              },
            });
          }}
          className="btn btn-success"
        >
          Add New Product
        </button>
      </div>
      <div className="w-full border-t-2 border-solid border-slate-600"></div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>CreatedBy</th>
              <th>Main Image</th>
              <th>Images</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, idx) => {
              return (
                <tr key={el.id}>
                  <td> {idx + 1} </td>
                  <td>{el.name}</td>
                  <td>{el.Category.name}</td>
                  <td>{el.price}</td>
                  <td>{el.User.username}</td>
                  <td>
                    <img src={el.mainImg}></img>
                  </td>
                  <td>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-4" className="btn">
                      open modal
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-4"
                      className="modal-toggle"
                    />
                    <label
                      htmlFor="my-modal-4"
                      className="modal cursor-pointer"
                    >
                      <label className="modal-box relative" htmlFor="">
                        <img alt={`ayam-index${idx}`}></img>
                        {console.log(el.mainImg)}
                      </label>
                    </label>
                  </td>
                  <td className="">
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          navigate(`/editProduct/${el.slug}`, {
                            state: {
                              slug: el.slug,
                              name: el.name,
                              description: el.description,
                              price: el.price,
                              mainImg: el.mainImg,
                              categoryId: el.categoryId,
                            },
                          });
                        }}
                        className="btn btn-active btn-secondary"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={(event) => handleDelete(event, el.slug)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
