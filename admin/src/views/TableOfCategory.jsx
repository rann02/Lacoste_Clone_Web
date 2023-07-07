import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory, deleteCategory } from "../store/actions/actionCreator";
export default function TableOfCategory() {
  const navigate = useNavigate();
  const categories = useSelector((state) => {
    return state.categoryReducer.categories;
  });
  const dispatch = useDispatch();

  const handleDelete = async (event, id) => {
    // console.log(id);
    event.preventDefault();
    try {
      const data = await dispatch(deleteCategory(id));
      await dispatch(fetchCategory());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  // console.log(categories);

  return (
    <section className="bg-slate-100 rounded-2xl shadow-2xl px-10 pb-10">
      <div className="flex items-center justify-between p-5">
        <h1 className="font-extrabold text-4xl text-blue-400">Category</h1>
        <button
          onClick={() => {
            navigate("/newCategory", {
              state: { id: "", name: "" },
            });
          }}
          className="btn btn-success"
        >
          Add New Category
        </button>
      </div>
      <div className="overflow-x-auto border-t-2 border-solid border-slate-600">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {categories.map((el, idx) => {
              return (
                <tr key={el.id}>
                  <td>{++idx}</td>
                  <td>{el.name}</td>
                  <td>{el.createdAt}</td>
                  <td>{el.updatedAt}</td>
                  <td>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          navigate(`/editCategory/${el.id}`, {
                            state: { id: el.id, name: el.name },
                          });
                        }}
                        className="btn btn-active btn-secondary"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={(event) => handleDelete(event, el.id)}
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
