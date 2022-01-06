import React from "react";
import "../styles/global.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { promiseMiddleware } from "@adobe/redux-saga-promise";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers";
import rootSaga from "../redux/sagas/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecurityLayout from "Layouts/SecurityLayout";

// import authenticatedRoute from "Layouts/AuthLayout";

const Wrapper = ({ children }) => {
  return <>{children}</>;
};

// export default Wrapper

function MyApp({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware({
    // onError: (error) => {
    //   if (error instanceof ArgumentError) {
    //     console.log(
    //       "Oops, programmer error! I called redux-saga-promise incorrectly:",
    //       error
    //     );
    //   } else {
    //     // ...
    //   }
    // },
  });
  const middleWares = [sagaMiddleware];
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(promiseMiddleware, ...middleWares)
  );

  sagaMiddleware.run(rootSaga);

  return (
    <>
      <Provider store={store}>
        <Wrapper>
          <>
            <SecurityLayout>
              <Component {...pageProps} />
            </SecurityLayout>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        </Wrapper>
      </Provider>
    </>
  );
}

export default MyApp;
