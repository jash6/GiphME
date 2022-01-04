import * as React from "react";
import RootNavigation from './navigation';
import {Provider} from 'react-redux'
import {Store} from './redux/store'

export default function App() {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}


