// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { dummyProducts } from "../assets/assets.js";
// import { toast } from "react-hot-toast";
// import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const currency = import.meta.env.VITE_CURRENCY;

//   const navigate = useNavigate();
//   const [user, setUser] = useState(false);
//   const [isSeller, setIsSeller] = useState(false);
//   const [showUserLogin, setShowUserLogin] = useState(false);
//   const [products, setProducts] = useState([]);

//   const [cartItems, setCartItems] = useState({});
//   const [searchQuery, setSearchQuery] = useState({});

//   // Fetch seller status
//   const fetchSeller = async () => {
//     try {
//       const { data } = await axios.get("/api/seller/is-auth");
//       if (data.success) {
//         setIsSeller(true);
//       } else {
//         setIsSeller(false);
//       }
//     } catch (error) {
//       setIsSeller(false);
//     }
//   };

//   // Fetch User Auth Status, User Data and Cart Items
//   const fetchUser = async () => {
//     try {
//       const { data } = await axios.get("/api/user/is-auth");
//       if (data.success) {
//         setUser(data.user);
//         setCartItems(data.user.cartItems);
//       }
//     } catch (error) {
//       setUser(null);
//     }
//   };

//   // Fetch all products
//   // const fetchProducts = async () => {
//   //     try {
//   //         const { data } = await axios.get('/api/product/list');
//   //         if(data.success){
//   //             setProducts(data.products);
//   //         }
//   //         else{
//   //             toast.error(data.message);
//   //         }
//   //     } catch (error) {
//   //         toast.error(error.message);
//   //     }
//   // }
//     // const fetchProducts = async () => {
//     //   try {
//     //     const { data } = await axios.get("/api/product/list");

//     //     if (data.success) {
//     //       if (data.products.length > 0) {
//     //         // MongoDB mein products hain
//     //         setProducts(data.products);
//     //       } else {
//     //         // MongoDB empty hai
//     //         // Local dummy products use karo
//     //         setProducts(dummyProducts);
//     //       }
//     //     } else {
//     //       toast.error(data.message);
//     //     }
//     //   } catch (error) {
//     //     // Agar backend/API available nahi hai
//     //     // tab bhi local products show honge
//     //     setProducts(dummyProducts);
//     //   }
//     // };

// //   const fetchProducts = async () => {
// //     try {
// //       const { data } = await axios.get("/api/product/list");

// //       if (data.success) {
// //         // assets.js ke dummy products ko ProductCart ke format mein convert karo
// //         const formattedDummyProducts = dummyProducts.map((product) => ({
// //           ...product,
// //           images: product.image,
// //           quantity: 10,
// //         }));

// //         // MongoDB + Dummy products combine
// //         const allProducts = [...data.products, ...formattedDummyProducts];

// //         // Duplicate products remove
// //         const uniqueProducts = allProducts.filter(
// //           (product, index, self) =>
// //             index ===
// //             self.findIndex(
// //               (p) =>
// //                 p.name.toLowerCase().trim() ===
// //                 product.name.toLowerCase().trim(),
// //             ),
// //         );

// //         setProducts(uniqueProducts);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("/api/product/list");

//         if (data.success) {
//           if (data.products.length > 0) {
//             // MongoDB mein products hain
//             setProducts(data.products);
//           } else {
//             // MongoDB empty hai
//             // Local dummy products use karo
//             setProducts(dummyProducts);
//           }
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         // Agar backend/API available nahi hai
//         // tab bhi local products show honge
//         setProducts(dummyProducts);
//       }
//     };


//   // Add product to cart
//   const addToCart = (itemId) => {
//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       cartData[itemId] += 1;
//     } else {
//       cartData[itemId] = 1;
//     }
//     setCartItems(cartData);
//     toast.success("Added To Cart");
//   };

//   // Get cart Item count
//   const getCartCount = () => {
//     let totalCount = 0;
//     for (const item in cartItems) {
//       totalCount += cartItems[item];
//     }
//     return totalCount;
//   };

//   // Get cart total amount
//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       let itemInfo = products.find((product) => product._id === items);
//       if (cartItems[items] > 0) {
//         totalAmount += itemInfo.offerPrice * cartItems[items];
//       }
//     }
//     return Math.floor(totalAmount * 100) / 100;
//   };

//   // Update cart item quantity
//   const updateCartItem = (itemId, quantity) => {
//     let cartData = structuredClone(cartItems);
//     cartData[itemId] = quantity;
//     setCartItems(cartData);
//     toast.success("Cart updated");
//   };

//   // Remove product from cart
//   const removeFromCart = (itemId) => {
//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId]) {
//       cartData[itemId] -= 1;
//       if (cartData[itemId] === 0) {
//         delete cartData[itemId];
//       }
//     }
//     toast.success("Removed from cart");
//     setCartItems(cartData);
//   };

//   useEffect(() => {
//     fetchUser();
//     fetchSeller();
//     fetchProducts();
//   }, []);

//   // Update Database Cart Items
//   useEffect(() => {
//     const updateCart = async () => {
//       try {
//         const { data } = await axios.post("/api/cart/update", { cartItems });
//         if (!data.success) {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         toast.error(error.message);
//       }
//     };
//     if (user) {
//       updateCart();
//     }
//   }, [cartItems]);

//   const value = {
//     navigate,
//     user,
//     setUser,
//     isSeller,
//     setIsSeller,
//     showUserLogin,
//     setCartItems,
//     setShowUserLogin,
//     products,
//     currency,
//     addToCart,
//     updateCartItem,
//     removeFromCart,
//     cartItems,
//     searchQuery,
//     setSearchQuery,
//     getCartAmount,
//     getCartCount,
//     axios,
//     fetchProducts,
//     fetchUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };



import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets.js";
import { toast } from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // Fetch seller status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  // Fetch User Auth Status, User Data and Cart Items
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      setUser(null);
    }
  };

  // dummyProducts mein field ka naam "image" hai (singular), lekin
  // ProductCart.jsx "images" (plural) expect karta hai — isliye map
  // karke fix karo, warna product.images[0] undefined hone se crash hoga.
  const formatDummyProducts = () =>
    dummyProducts.map((product) => ({
      ...product,
      images: product.image,
      quantity: product.quantity ?? 10,
    }));

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");

      if (data.success) {
        if (data.products.length > 0) {
          // MongoDB mein products hain
          setProducts(data.products);
        } else {
          // MongoDB empty hai
          // Local dummy products use karo (field names fix karke)
          setProducts(formatDummyProducts());
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // Agar backend/API available nahi hai
      // tab bhi local products show honge
      setProducts(formatDummyProducts());
    }
  };

  // Add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added To Cart");
  };

  // Get cart Item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // Get cart total amount
    const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (itemInfo && cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  // Update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  // Remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from cart");
    setCartItems(cartData);
  };

  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts();
  }, []);

  // Update Database Cart Items
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });
        if (!data.success) {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (user) {
      updateCart();
    }
  }, [cartItems]);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setCartItems,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios,
    fetchProducts,
    fetchUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};