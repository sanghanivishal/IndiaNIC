import ModuleSet from './AppModules';

let _ = require("lodash");
const actionModule = {
    common: require("./../../redux/common/Actions"),
};

export const Actions = _(ModuleSet)
  .keyBy(module => module)
  .mapValues(module => {
      return actionModule[module];
  })
  .mapValues(module => module.default)
  .value();

export default Actions;

