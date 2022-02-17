
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './dodeca/redux';

import App from './dodeca/app';

// import TableList from './video-rental/components/navigation';

import './index.css';

const rootEl = document.getElementById('root');

render(
   // <App dark />,rootEl
     <Provider store={store}>
         <App />
      </Provider>
     ,rootEl
);