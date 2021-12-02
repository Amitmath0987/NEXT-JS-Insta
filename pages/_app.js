import "../styles/global.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
function MyApp({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(helloSaga);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
