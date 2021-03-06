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

export default projectBuilder;
