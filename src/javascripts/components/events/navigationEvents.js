import bioBuilder from '../data/bio';
import { projectBuilder, projects } from '../data/projects';
import technologyBuilder from '../data/technologies';

const navigationEvents = () => {
  document.querySelector('#bioInfo').addEventListener('click', bioBuilder);
  document.querySelector('#technologies').addEventListener('click', technologyBuilder);
  document.querySelector('#projects').addEventListener('click', () => {
    projectBuilder(projects);
  });
};

export default navigationEvents;
