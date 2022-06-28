import './App.css';

function App() {
  return (
    <>
      {/* <!-- navbar --> */}
      <section>
        <div className='container-fluid'>
          <div className='row mx-5'>
            <nav className='navbar navbar-custom navbar-expand-sm w-100 nv'>
              {/* <!-- Brand --> */}
              <a className='navbar-brand' href='/index.html'>
                <img
                  src='/img/f96a261e5a60d7d66b36e2850e3eb19b.png'
                  alt=''
                  className='navLogo'
                />
              </a>
              <div className='flags'>
                <img src='/img/download.png' alt='Ghana' />
                <img src='/img/download (1).png' alt='Ghana' />
                <img src='/img/download (2).png' alt='Ghana' />
              </div>
              <div className='aboutUs'>
                <a href='#'>ABOUT US</a>
              </div>
            </nav>
            <br />
          </div>
        </div>
        {/* <!-- end of navbar  --> */}
      </section>
      {/* <!-- slider section  --> */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div
              id='carouselExampleControls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner slider'>
                <div className='carousel-item active'>
                  <img
                    src='/img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg'
                    className='d-block w-100'
                    alt=''
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='/img/tim-trad-BwmOGbS2POw-unsplash.jpg'
                    className='d-block w-100'
                    alt=''
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='/img/ben-o-bro-wpU4veNGnHg-unsplash.jpg'
                    className='d-block w-100'
                    alt=''
                  />
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-target='#carouselExampleControls'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-target='#carouselExampleControls'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of slider  --> */}
      <section>
        <div className='container plans'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='text-center'>PLANS</h3>
            </div>
            <div className='col-md-3'>
              <div className='thumbnail'>
                <img
                  src='/img/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg'
                  alt=''
                  className='img-fluid'
                />
                <div className='caption text-center'>
                  <h3>Virtual Offices</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae ipsa facilis molestiae fugit nam cupiditate
                    distinctio modi natus laboriosam omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='thumbnail'>
                <img
                  src='/img/raj-rana-zCQsBI7ZltQ-unsplash.jpg'
                  alt=''
                  className='img-fluid'
                />
                <div className='caption text-center'>
                  <h3>Customized Offices</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae ipsa facilis molestiae fugit nam cupiditate
                    distinctio modi natus laboriosam omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='thumbnail'>
                <img
                  src='/img/toa-heftiba-FV3GConVSss-unsplash.jpg'
                  alt=''
                  className='img-fluid'
                />
                <div className='caption text-center'>
                  <h3>Serviced Offices</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae ipsa facilis molestiae fugit nam cupiditate
                    distinctio modi natus laboriosam omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='thumbnail'>
                <img
                  src='/img/copernico-cLmOptqvuFQ-unsplash.jpg'
                  alt=''
                  className='img-fluid'
                />
                <div className='caption text-center'>
                  <h3>Meeting Offices</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae ipsa facilis molestiae fugit nam cupiditate
                    distinctio modi natus laboriosam omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='footer mt-5'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4'>
              <h5>VISIT US IN KENYA</h5>
              <h6>Nairobi, Kenya</h6>
              <p>
                Belgravia Center,14 Riverside, <br />
                4th floor, Off Riverside Drive <br />
                Hanover Center, 14 Riverside Drive, <br />
                6th floor, Off Riverside Drive
              </p>
            </div>
            <div className='col-md-4'>
              <h5>VISIT US IN GHANA</h5>
              <h6>Accra, Ghana</h6>
              <p>
                One Airport Square, Airport City <br />
                8th Floor
              </p>
            </div>
            <div className='col-md-4'>
              <h5>VISIT US IN NIGERIA</h5>
              <h6>Lagos, Nigeria</h6>
              <p>Sterling Bank Building</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
