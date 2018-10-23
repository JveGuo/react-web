import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import Page from './page';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configStore from './redux/store';
import { AppContainer } from 'react-hot-loader';

// redux 注入操作
const store = configStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <Component store={store}/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Page);

if(module.hot) {
  module.hot.accept('./page',() => {
    render(Page);
  });
}

serviceWorker.unregister();
