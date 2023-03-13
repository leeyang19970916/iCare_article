import React from 'react';
import ReactDOM from 'react-dom/client';

import "./scss/bootStrap/bootStrap.scss";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/store";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from "./app"
// library.add(faCheckSquare, faCoffee);
library.add(fab, fas, far);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
   </Provider>

);
