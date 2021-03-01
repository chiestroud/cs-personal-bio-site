import navBarCreater from './navBar';
import bioBuilder from '../data/bio';

const domBuilder = () => {
  navBarCreater();
  bioBuilder();
};

export default domBuilder;
