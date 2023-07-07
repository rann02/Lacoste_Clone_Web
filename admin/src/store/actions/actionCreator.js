import { fetchProduct } from "./actionType";

// const url = 'https://api.randy02.my.id'
const url = "https://lacoste-admin-production.up.railway.app";

const fetchProductSuccess = (data) => {
  return {
    type: fetchProduct,
    payload: data,
  };
};

export function login(dataLogin) {
  return async () => {
    try {
      const res = await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin),
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();
      // console.log(data);
      return data;
      // throw data
    } catch (error) {
      throw error;
    }
  };
}

export function register(dataRegister) {
  return async () => {
    try {
      const res = await fetch(url + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataRegister),
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();
      // console.log(data);
      return data;
      // throw data
    } catch (error) {
      throw error;
    }
  };
}

export function fetchProducts() {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState, api) => {
    // you can use api here
    try {
      const res = await fetch(url + "/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });
      if (!res.ok) {
        throw await res.json();
      }
      const data = await res.json();
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchProductBySlug(slug) {
  // console.log('SALLLL');
  return async (dispatch, getState, api) => {
    try {
      const res = await fetch(url + "/products" + `/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      dispatch({
        type: "fetch/bySlug",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProduct({ dataProduct, imgUrls }) {
  const resultOfData = {
    ...dataProduct,
    imgUrls: imgUrls,
  };
  return async () => {
    try {
      const res = await fetch(url + "/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(resultOfData),
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function deleteProduct(slug) {
  // console.log(id);
  return async () => {
    try {
      const res = await fetch(url + "/products" + `/${slug}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });

      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function editProduct({ slug, dataProduct }) {
  // console.log(id);
  return async () => {
    try {
      const res = await fetch(url + "/products" + `/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(dataProduct),
      });

      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function fetchCategory() {
  // console.log('SALLLL');
  return async (dispatch, getState, api) => {
    try {
      const res = await fetch(url + "/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      dispatch({
        type: "fetch/categories",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCategoryById(id) {
  // console.log('SALLLL');
  return async (dispatch, getState, api) => {
    try {
      const res = await fetch(url + "/categories" + `/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      dispatch({
        type: "fetch/byId",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCategory(dataCategory) {
  return async () => {
    try {
      const res = await fetch(url + "/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(dataCategory),
      });
      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function deleteCategory(id) {
  // console.log(id);
  return async () => {
    try {
      const res = await fetch(url + "/categories" + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
      });

      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export function editCategory({ id, dataCategory }) {
  // console.log(id);
  return async () => {
    try {
      const res = await fetch(url + "/categories" + `/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: `${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(dataCategory),
      });

      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}
