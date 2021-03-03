import navBarCreater from './navBar';
import navigationEvents from '../events/navigationEvents';
import appBuilder from '../data/app';
import welcomeBuilder from '../data/welcome';

const domBuilder = () => {
  navBarCreater();
  appBuilder();
  welcomeBuilder();
  navigationEvents();
};

export default domBuilder;
