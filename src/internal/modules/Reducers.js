import React from 'react';
import ModuleSet from './AppModules';

const _ = require('lodash');
const reducerModule = {
    common: require("./../../redux/common/Reducers"),
};

const Reducers = _(ModuleSet)
  .keyBy(module => module)
  .mapValues(module => {
      return reducerModule[module];
  })
  .mapValues(module => module.Reducer)
  .value();

export default Reducers;
