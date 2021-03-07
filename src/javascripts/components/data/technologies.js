const technologyBuilder = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#bio').innerHTML = '';
  document.querySelector('#project').innerHTML = '';
  document.querySelector('#contacts').innerHTML = '';
  document.querySelector('#technology').innerHTML = `<div class="technology">
                                                          <img src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="HTML">
                                                          <img src="https://www.flaticon.com/svg/vstatic/svg/732/732190.svg?token=exp=1615071135~hmac=823f9493f05c1f2b13017f578f1f21e8" alt="CSS">
                                                          <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JS">
                                                          <img src="https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png" alt="NPM">
                                                        </div>`;
};

export default technologyBuilder;
