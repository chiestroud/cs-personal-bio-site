import bioBuilder from '../data/bio';
import technologyBuilder from '../data/technologies';

const navigationEvents = () => {
  document.querySelector('#bioInfo').addEventListener('click', bioBuilder);
  document.querySelector('#technologies').addEventListener('click', technologyBuilder);
};

export default navigationEvents;
