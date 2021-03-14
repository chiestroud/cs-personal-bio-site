const projectBuilder = (array) => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#technology').innerHTML = '';
  document.querySelector('#bio').innerHTML = '';
  document.querySelector('#contacts').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#project').innerHTML += `
    <div id="card" class="col-lg-6" id=${item}">
      <img class="card-img-top img-fluid" src="${item.screenshot}" alt="${item.title}">
      <div class="card-body">
        <p class="card-title">${item.title}</p>
        <p class="card-text">${item.description}</p>
        <p class="card-text">Technologies used: ${item.technologiesUsed}</p>
        <a href="${item.url}" class="card-link" target="_blank" >URL</a>
        <a href="${item.githubUrl}" class="card-link" target="_blank">GitHub</a>
      </div>
    </div>`;
  });
};

export default projectBuilder;
