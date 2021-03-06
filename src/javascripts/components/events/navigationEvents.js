import bioBuilder from '../data/bio';
import projectBuilder from '../data/projects';
import projects from '../../helpers/projectsData';
import technologyBuilder from '../data/technologies';

const navigationEvents = () => {
  document.querySelector('#bioInfo').addEventListener('click', bioBuilder);
  document.querySelector('#technologies').addEventListener('click', technologyBuilder);
  document.querySelector('#projects').addEventListener('click', () => {
    projectBuilder(projects);
  });
};

export default navigationEvents;
