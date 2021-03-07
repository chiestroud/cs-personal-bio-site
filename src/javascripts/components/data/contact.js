const contactBuilder = (array) => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#technology').innerHTML = '';
  document.querySelector('#bio').innerHTML = '';
  document.querySelector('#project').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#contacts').innerHTML += `<div class="card" style="width: 18rem;" id=${item}">                                                  <div class="card-body contactCard">
                                                          <p class="card-title">${item.title}</p>
                                                          <p class="card-text">${item.icon}</p>
                                                          <a href="#" class="card-link">Contact Chie</a>
                                                        </div>
                                                      </div>`;
  });
};

export default contactBuilder;
