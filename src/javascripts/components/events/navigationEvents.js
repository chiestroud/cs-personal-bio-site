import bioBuilder from '../data/bio';
import projectBuilder from '../data/projects';
import projects from '../../helpers/projectsData';
import technologyBuilder from '../data/technologies';
import contactBuilder from '../data/contact';
import contacts from '../../helpers/contactInfo';

const navigationEvents = () => {
  document.querySelector('#bioInfo').addEventListener('click', bioBuilder);
  document.querySelector('#technologies').addEventListener('click', technologyBuilder);
  document.querySelector('#projects').addEventListener('click', () => {
    projectBuilder(projects);
  });
  document.querySelector('#contact').addEventListener('click', () => {
    contactBuilder(contacts);
  });
};

export default navigationEvents;
