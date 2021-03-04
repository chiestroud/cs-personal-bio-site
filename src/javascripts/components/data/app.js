const appBuilder = () => {
  document.querySelector('#app').innerHTML = `<div class="welcomeContainer">
                                                <div id="welcome"></div>
                                              </div>
                                              <div id="bio"></div>
                                              <div id="technology"></div>
                                              <div id="project" class="container"></div>`;
};

export default appBuilder;
