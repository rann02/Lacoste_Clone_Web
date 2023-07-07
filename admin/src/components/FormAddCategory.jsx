import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postCategory,
  fetchCategoryById,
  editCategory,
} from "../store/actions/actionCreator";
import Swal from "sweetalert2";

export default function FormAddCategory() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, name } = state;
  const dispatch = useDispatch();
  // const { id } = useParams();
  // console.log({ id, name });
  // const category = useSelector((state) => {
  //   return state.categoryReducer.category;
  // });
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    // console.log({name, value});
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const data = await dispatch(
          editCategory({ id, dataCategory: newCategory })
        );
        setNewCategory({
          name: "",
        });
        navigate("/category");
        Swal.fire({
          position: "top-end",
          icon: "success",
          toast: true,
          title: `${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        await dispatch(postCategory(newCategory));
        navigate("/category");
        Swal.fire({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Category has been created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Opss..`,
        text: `${error.message}`,
        toast: true,
      });
    }
  };

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchCategoryById(id));
  //   }
  // }, [id]);

  useEffect(() => {
    if (id && name) {
      setNewCategory({ name });
    }
  }, [id, name]);

  // console.log(newCategory);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-4/12 flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl"
        onSubmit={handleSubmitCategory}
      >
        <label for="categoryName">Name</label>
        <input
          name="name"
          value={newCategory.name}
          onChange={change}
          id="categoryName"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full"
        ></input>
        <div className="flex gap-5 justify-center">
          <button className="btn btn-success w-24">Submit</button>
          <Link className="btn btn-outline btn-warning" to={"/category"}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
