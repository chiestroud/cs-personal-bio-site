const navBarCreater = () => {
  document.querySelector('#navBar').innerHTML = `<nav class="navbar navbar-expand-lg fixed-top">
                                                   <a class="navbar-brand" href="#"><i class="far fa-laugh-wink"></i> Chie Stroud</a>
                                                  <button class="navbar-toggler bg-dark text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
                                                  </button>

                                                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav mr-auto">
                                                      <li class="nav-item">
                                                        <a class="nav-link" id="bioInfo" href="#">Bio</a>
                                                      </li>                                    
                                                      <li class="nav-item">
                                                        <a class="nav-link" id="technologies" href="#">Technologies</a>
                                                      </li>
                                                      <li class="nav-item">
                                                        <a class="nav-link" href="#" id="projects">Projects</a>
                                                      </li>
                                                      <li class="nav-item">
                                                      <a class="nav-link" id="contact" href="#">Contact</a>
                                                    </li>
                                                    </ul>
                                                    <form class="form-inline my-2 my-lg-0">
                                                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                                    </form>
                                                  </div>
                                                </nav>`;
};

export default navBarCreater;
