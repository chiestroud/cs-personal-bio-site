/* eslint-disable max-len */
const bioBuilder = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#technology').innerHTML = '';
  document.querySelector('#project').innerHTML = '';
  document.querySelector('#contacts').innerHTML = '';
  document.querySelector('#bio').innerHTML = `<div class="bio">
                                                <div class="bioTitle">Hi! I am Chie Stroud.</div>
                                                <div class="bioDetails">I was born and raised in Kyoto, Japan. Moved to the US in 2016, and currently working at Toyo Automotive Parts as a part of the quality team. I am also a part time Web Development Bootcamp student at Nashville Software School. It started with my out - of - nowhere thoughts of building a web application. This is the most interesting thing I have ever learned in my life and I just cannot get enough of it. Software development is an endless journey of learning, problem solving, and being creative. I love it so much.</div>
                                                <div><a href="https://lh3.googleusercontent.com/T8-u0QEx7WRsayMekrNsXpaYG9atXKs6OyfJIjZfeor8YPiky7gNjP862t33eWs_tnTlOa9FsZ2lzsqBPBwQCsR_kmMd4Qpe25XPOLO0Xbgm2p5PEgF_r-r8ivd3TnNE8Ft5gljFqI4=w2400?source=screenshot.guru"> <img class="profilePic" src="https://lh3.googleusercontent.com/T8-u0QEx7WRsayMekrNsXpaYG9atXKs6OyfJIjZfeor8YPiky7gNjP862t33eWs_tnTlOa9FsZ2lzsqBPBwQCsR_kmMd4Qpe25XPOLO0Xbgm2p5PEgF_r-r8ivd3TnNE8Ft5gljFqI4=w600-h315-p-k" alt="Chie's Profile" /> </a></div>
                                              </div>`;
};

export default bioBuilder;
