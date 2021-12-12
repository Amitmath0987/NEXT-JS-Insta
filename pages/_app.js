import "../styles/global.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { promiseMiddleware } from '@adobe/redux-saga-promise'
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers";
import rootSaga from "../redux/sagas/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, {}, applyMiddleware(promiseMiddleware,...middleWares));

  sagaMiddleware.run(rootSaga);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
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
      </Provider>
    </>
  );
}

export default MyApp;
