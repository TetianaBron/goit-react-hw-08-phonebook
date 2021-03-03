import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
//import Spinner from './Components/Spinner/Spinner';
import '../node_modules/modern-normalize/modern-normalize.css';
import './styles/base.scss';

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate
            loading={<Spinner/>}
            persistor={store.persistor}> */}
           <App/>  
    {/* </PersistGate> */}
    </Provider>,
    document.querySelector('#root'),
);
