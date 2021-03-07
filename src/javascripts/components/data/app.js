const appBuilder = () => {
  document.querySelector('#app').innerHTML = `<div class="welcomeContainer">
                                                <div id="welcome"></div>
                                              </div>
                                              <div id="bio"></div>
                                              <div id="technology"></div>
                                              <div class="container-fluid px-0">
                                                <div id="project" class="row align-items-center"></div>
                                              </div>
                                              <div class="container d-flex justify-content-between" id="contacts"></div>`;
};

export default appBuilder;
