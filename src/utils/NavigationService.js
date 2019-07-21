import { NavigationActions } from 'react-navigation';

let _navigator;


const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    })
  );
  return { routeName, params };
};

export default {
  navigate,
};
