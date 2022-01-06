// // const authant = (Component = null, options = {}) => {
// //   return <div></div>;
// // };
// import React, { useEffect, useState } from "react";
// import Router, { useRouter } from "next/router";
// import SignIn from "Components/AuthComponents/SignIn/SignIn";
// import { useSelector } from "react-redux";
// const authenticatedRoute = (Component = null, props, options = {}) => {
//   const state = useSelector((state) => state.auth);
//   console.log(`state`, state);
//   console.log(props);
//   const AuthLayout = () => {
//     const [loading, setLoading] = useState(true);

//     const isLoggedIn = false;
//     const router = useRouter();
//     console.log(`router`, router);
//     useEffect(() => {
//       if (isLoggedIn) {
//         setLoading(false);
//       } else {
//         Router.push(options.pathAfterFailure || "/signin");
//       }
//     }, []);

//     if (loading) {
//       if (router.pathname === "/signin") {
//         return <SignIn />;
//       }
//       return (
//         <div>
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-circle animate-bounce h-5 w-5 mr-3"
//             viewBox="0 0 16 16"
//           >
//             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//           </svg> */}
//           <span className="visually-hidden">Loading...</span>
//           {/* </div> */}
//         </div>
//       );
//     }
//     return <Component {...props} />;
//   };

//   return AuthLayout();
// };
// export default authenticatedRoute;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PageLoader from "Components/PageLoader/PageLoader";

const SecurityLayout = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const successCallback = () => {
    setIsAuthenticate(true);
  };
  const errorCallback = () => {
    router.push("/signin");
  };

  useEffect(() => {
    dispatch({
      type: "GET_CURRENTUSER",
      payload: {
        successCb: successCallback,
        errorCb: errorCallback,
      },
    });
  }, []);

  useEffect(() => {
    if (["/signin", "/signup", "/verify-email"].includes(router?.pathname)) {
      return setIsAuthenticate(true);
    }
  }, [router?.pathname]);

  return isAuthenticate ? children : <PageLoader />;
};

export default SecurityLayout;
