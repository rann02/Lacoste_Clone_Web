import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../views/Layout";
import ContentofLandingPage from "../components/ContentofLandingPage";
import Detail from "../components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: '',
            element: <ContentofLandingPage />
        },
        {
            path: '/detail/:slug',
            element: <Detail />
        }
    ]
  },
]);

export default router
