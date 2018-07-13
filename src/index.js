import React from 'react';
import ReactDOM from 'react-dom';
import { ProppyProvider } from 'proppy-react';
import { init } from '@rematch/core';
import selectorPlugin from '@rematch/select';
import 'bulma/css/bulma.css';
import './index.css';
import App from './components/App';
import models from './modules';
import registerServiceWorker from './registerServiceWorker';

const select = selectorPlugin({ sliceState: rootState => rootState });
const rematchInit = { models, plugins: [select] };
const store = init(rematchInit);

const providers = {
  store,
};

ReactDOM.render(
  <ProppyProvider providers={providers}>
    <App />
  </ProppyProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
