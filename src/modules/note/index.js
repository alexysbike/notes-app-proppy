import { initialState as state, reducers } from './reducers';
import effects from './effects';
import * as selectors from './selectors';

const model = {
  state,
  reducers,
  effects,
  selectors,
};

export default model;
