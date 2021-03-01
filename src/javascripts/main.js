// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';

import '../styles/main.scss';
import domBuilder from './components/domBuilder/domBuilder';

const init = () => {
  domBuilder();

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
