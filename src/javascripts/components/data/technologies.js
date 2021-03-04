const technologyBuilder = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#bio').innerHTML = '';
  document.querySelector('#project').innerHTML = '';
  document.querySelector('#technology').innerHTML = `<div class="technology">
                                                          <img src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" alt="HTML">
                                                          <img src="https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png" alt="CSS">
                                                          <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JS">
                                                          <img src="https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png" alt="NPM">
                                                        </div>`;
};

export default technologyBuilder;
