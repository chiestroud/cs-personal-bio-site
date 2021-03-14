import bioBuilder from '../data/bio';
import projectBuilder from '../data/projects';
import technologyBuilder from '../data/technologies';
import contactBuilder from '../data/contact';
import contacts from '../../helpers/contactInfo';
import getProjects from '../../helpers/data/projectData';

const navigationEvents = () => {
  document.querySelector('#bioInfo').addEventListener('click', bioBuilder);
  document.querySelector('#technologies').addEventListener('click', technologyBuilder);
  document.querySelector('#projects').addEventListener('click', () => {
    getProjects().then((projectsArray) => {
      if (projectsArray.length) {
        projectBuilder(projectsArray);
      }
    });
  });
  document.querySelector('#contact').addEventListener('click', () => {
    contactBuilder(contacts);
  });
};

export default navigationEvents;
