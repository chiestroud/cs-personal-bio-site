const projects = [
  {
    title: 'Product Cards',
    screenshot: '/images/productcard.png',
    description: 'My very first project in NSS. Static website only using HTML and CSS. Used flexbox to display cards',
    technologiesUsed: 'HTML, CSS',
    available: true,
    url: 'https://cs-product-cards.netlify.app/',
    githubUrl: 'https://github.com/chiestroud/product-cards',
  },
  {
    title: 'Pet Adoption',
    screenshot: '/images/petadoption.png',
    description: 'My second project in NSS. Dynamically created list of available pet cards using JavaScript',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript',
    available: true,
    url: 'https://cs-pet-adoption.netlify.app',
    githubUrl: 'https://github.com/chiestroud/pet-adoption',
  },
  {
    title: 'Sorting Hat',
    screenshot: '/images/sortinghat.png',
    description: 'My third project in NSS. Learned how to sort by name/school and got a better understanding of how to use eventlistener.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript',
    available: true,
    url: 'https://cs-sorting-hat.netlify.app',
    githubUrl: 'https://github.com/chiestroud/sorting-hat',
  },
  {
    title: 'Bear Watcher',
    screenshot: '/images/bearwatcher.png',
    description: 'My fourth project Bear Watcher',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript',
    available: true,
    url: 'https://cs-bear-watcher.netlify.app/',
    githubUrl: 'https://github.com/chiestroud/ASSIGNMENT-Bear-Watcher',
  },
  {
    title: 'Tamagotchi',
    screenshot: '/../../../../images/tamagotchi.png',
    description: 'My fifth project Tamagotchi',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript',
    available: true,
    url: 'https://cs-tamagotchi.netlify.app/',
    githubUrl: 'https://github.com/chiestroud/ASSIGNMENT-Tamagotchi',
  }
];

const projectBuilder = (array) => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#technology').innerHTML = '';
  document.querySelector('#bio').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#project').innerHTML += `<div class="row">
                                                      <div class="card mb-3 col" style="width: 6rem;" id=${item}">
                                                          <img class="card-img-top" src="${item.screenshot}" alt="Card image cap">
                                                          <div class="card-body">
                                                            <h5 class="card-title">${item.title}</h5>
                                                            <p class="card-text">${item.description}</p>
                                                            <p class="card-text">Technologies used: ${item.technologiesUsed}</p>
                                                            <a href="${item.url}" class="card-link">URL</a>
                                                            <a href="${item.githubUrl}" class="card-link">GitHub</a>
                                                          </div>
                                                          </div>
                                                      </div>`;
  });
};

export { projects, projectBuilder };
