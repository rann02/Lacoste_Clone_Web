import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Layout from "../views/Layout";
import TableOfProduct from '../views/TableOfProduct';
import TableOfCategory from '../views/TableOfCategory';
import FormAddProduct from '../components/FormAddProduct';
import FormAddCategory from '../components/FormAddCategory';
import FormAddAdmin from '../components/FormAddAmin';
import FormLogin from "../components/FormLogin";

const router = createBrowserRouter([
    {
        element: <Layout />,
        loader: () => {
            if (!localStorage.access_token) {
                return redirect('/login')
            } else {
                return null
            }
        },
        children: [
            {
                path: '/',
                element: <TableOfProduct />
            },
            {
                path: '/category',
                element: <TableOfCategory />
            },
            {
                path: '/newAdmin',
                element: <FormAddAdmin />
            },
            {
                path: '/newProduct',
                element: <FormAddProduct />
            },
            {
                path: '/editProduct/:slug',
                element: <FormAddProduct />
            },
            {
                path: '/newCategory',
                element: <FormAddCategory />
            },
            {
                path: '/editCategory/:id',
                element: <FormAddCategory />
            }
        ]
    },
    {
        path: '/login',
        element: <FormLogin />,
        loader: () => {
            if (localStorage.access_token) {
                return redirect('/')
            } else {
                return null
            }
        }

    }
])

export default router