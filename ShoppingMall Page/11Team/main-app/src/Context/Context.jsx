import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  userState: null,
  cart: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("%c로그인!", "color: #d93d1a;");
      return {
        ...state,
        userState: action.payload,
      };
    case "LOGOUT":
      console.log("%c로그아웃!", "color: #d93d1a;");
      return {
        ...state,
        userState: null,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity += 0.5)
            : item.quantity;
        }),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity += 0.5)
            : item.quantity;
        }),
      };
    case "DECEASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity -= 0.5)
            : item.quantity;
        }),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };

    case "REMOVE_ALL_ITEM":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
    useEffect(() => {
      localStorage.setItem("cartData", JSON.stringify(state.cart));
      console.log(JSON.parse(localStorage.getItem("cartData")));
    }, [state.cart]);

  const logIn = (data) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  };

  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const addToCart = (data) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { data },
    });
  };

  const updateCart = (id) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECEASE_QUANTITY",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
};
    const removeAllItem = () => {
      dispatch({
        type: "REMOVE_ALL_ITEM",
      });
    };
    return (
      <GlobalContext.Provider
        value={{
          logIn,
          logOut,
          loginStatus: state.userState,
          cart: state.cart,
          addToCart,
          updateCart,
          increaseQuantity,
          decreaseQuantity,
          removeItem,
          removeAllItem,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
