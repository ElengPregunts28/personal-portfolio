

function App() {

  return (
    <>
  {/* header 
   ================================================== */}
  <header>
    <div className="row">
      <div className="top-bar">
        <nav id="main-nav-wrap">
          <ul className="main-navigation">
            <li className="current">
              <a className="smoothscroll" href="#intro" title="">
                HOME
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="">
                ABOUT
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume" title="">
                RESUME
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" title="">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="">
                CONTACTS
              </a>
            </li>
          </ul>
        </nav>
      </div>{" "}
      {/* /top-bar */}
    </div>{" "}
    {/* /row */}
  </header>{" "}
  {/* /header */}
  {/* intro section
   ================================================== */}
  <section id="intro">
    <div className="intro-overlay" />
    <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <h5>Hello, World.</h5>
          <h1>I'm Juan Dela Cruz.</h1>
          <p className="intro-position">
            <span>Front-end Developer</span>
            <span>UI/UX Designer</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">
            More About Me
          </a>
        </div>
      </div>
    </div>{" "}
    {/* /intro-content */}
    <ul className="intro-social">
      <li>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-behance" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
      </li>
    </ul>{" "}
    {/* /intro-social */}
  </section>{" "}
  {/* /intro */}
  {/* about section
   ================================================== */}
  <section id="about">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>About</h5>
        <h1>Let me introduce myself.</h1>
        <div className="intro-info">
          <img src="images/profile-pic.jpg" alt="Profile Picture" />
          <p className="lead">
            Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod.
          </p>
        </div>
      </div>
    </div>{" "}
    {/* /section-intro */}
    <div className="row about-content">
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p>
          Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in
          magna sint minim officia consectetur nisi commodo ea magna pariatur
          nisi cillum.
        </p>
        <ul className="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>Juan Dela Cruz</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>September 28, 1987</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Freelancer, Frontend Developer</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>www.kardswebsite.com</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>me@kardswebsite.com</span>
          </li>
        </ul>{" "}
        {/* /info-list */}
      </div>
      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p>
          Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in
          magna sint minim officia consectetur nisi commodo ea magna pariatur
          nisi cillum.
        </p>
        <ul className="skill-bars">
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>HTML5</strong>
          </li>
          <li>
            <div className="progress percent85">
              <span>85%</span>
            </div>
            <strong>CSS3</strong>
          </li>
          <li>
            <div className="progress percent70">
              <span>70%</span>
            </div>
            <strong>JQuery</strong>
          </li>
          <li>
            <div className="progress percent95">
              <span>95%</span>
            </div>
            <strong>PHP</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>Wordpress</strong>
          </li>
        </ul>{" "}
        {/* /skill-bars */}
      </div>
    </div>
    <div className="row button-section">
      <div className="col-twelve">
        <a href="#" title="Download CV" className="button button-primary">
          Download CV
        </a>
      </div>
    </div>
  </section>{" "}
  {/* /process*/}
  {/* resume Section
   ================================================== */}
  <section id="resume" className="grey-section">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
        <p className="lead">
          Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
          dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
          Consectetur ut in in eu do.
        </p>
      </div>
    </div>{" "}
    {/* /section-intro*/}
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>{" "}
      {/* /resume-header */}
      <div className="col-twelve">
        <div className="timeline-wrap">
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-header">
              <h3>UI Designer</h3>
              <p>July 2015 - Present</p>
            </div>
            <div className="timeline-content">
              <h4>Awesome Studio</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-header">
              <h3>Front-end Developer</h3>
              <p>July 2014 - June 2015</p>
            </div>
            <div className="timeline-content">
              <h4>Super Cool Agency</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-header">
              <h3>Web Designer</h3>
              <p>May 2013 - June 2014</p>
            </div>
            <div className="timeline-content">
              <h4>Great Designs Studio</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
        </div>{" "}
        {/* /timeline-wrap */}
      </div>{" "}
      {/* /col-twelve */}
    </div>{" "}
    {/* /resume-timeline */}
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Education</h2>
      </div>{" "}
      {/* /resume-header */}
      <div className="col-twelve">
        <div className="timeline-wrap">
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-briefcase" />
            </div>
            <div className="timeline-header">
              <h3>Master Degree</h3>
              <p>July 2015 - Present</p>
            </div>
            <div className="timeline-content">
              <h4>University of Life</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-briefcase" />
            </div>
            <div className="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>July 2014 - June 2015</p>
            </div>
            <div className="timeline-content">
              <h4>State Design University</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-briefcase" />
            </div>
            <div className="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>May 2013 - June 2014</p>
            </div>
            <div className="timeline-content">
              <h4>Design College</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
        </div>{" "}
        {/* /timeline-wrap */}
      </div>{" "}
      {/* /col-twelve */}
    </div>{" "}
    {/* /resume-timeline */}
  </section>{" "}
  {/* /features */}
  {/* Portfolio Section
   ================================================== */}
  <section id="portfolio">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Projects</h5>
        <h1>Check Out Some of My Works.</h1>
        <p className="lead">
          Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
          dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
          Consectetur ut in in eu do.
        </p>
      </div>
    </div>{" "}
    {/* /section-intro*/}
    <div className="row portfolio-content">
      <div className="col-twelve">
        {/* portfolio-wrapper */}
        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/liberty.jpg" alt="Liberty" />
              <a href="#modal-01" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Liberty</h3>
                    <span className="folio-types">Graphic Design</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/shutterbug.jpg" alt="Shutterbug" />
              <a href="#modal-02" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Shutterbug</h3>
                    <span className="folio-types">Web Design</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/clouds.jpg" alt="Clouds" />
              <a href="#modal-03" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Clouds</h3>
                    <span className="folio-types">Web Design</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/beetle.jpg" alt="Beetle" />
              <a href="#modal-04" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Beetle</h3>
                    <span className="folio-types">Branding</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/lighthouse.jpg" alt="Lighthouse" />
              <a href="#modal-05" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Lighthouse</h3>
                    <span className="folio-types">Web Development</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className="bgrid folio-item">
            <div className="item-wrap">
              <img src="images/portfolio/salad.jpg" alt="Salad" />
              <a href="#modal-06" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">Salad</h3>
                    <span className="folio-types">Branding</span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          {/* modal popups - begin
	            ============================================================= */}
          <div id="modal-01" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Liberty</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Web Development</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-01 */}
          <div id="modal-02" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Shutterbug</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Web Design</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-02 */}
          <div id="modal-03" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Clouds</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Web Design</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-03 */}
          <div id="modal-04" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Beetle</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Branding</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-04 */}
          <div id="modal-05" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Lighthouse</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Web Development</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-05 */}
          <div id="modal-06" className="popup-modal slider mfp-hide">
            <div className="media">
              <img src="images/portfolio/modals/m-salad.jpg" alt="" />
            </div>
            <div className="description-box">
              <h4>Salad</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <div className="categories">Branding</div>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href="#" className="popup-modal-dismiss">
                Close
              </a>
            </div>
          </div>{" "}
          {/* /modal-06 */}
          {/* modal popups - end
	            ============================================================= */}
        </div>{" "}
        {/* /portfolio-wrapper */}
      </div>{" "}
      {/* /twelve */}
    </div>{" "}
    {/* /portfolio-content */}
  </section>{" "}
  {/* /portfolio */} 
  {/* contact
   ================================================== */}
  <section id="contact">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Contact</h5>
        <h1>I'd Love To Hear From You.</h1>
        <p className="lead">
          Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
          dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
          Consectetur ut in in eu do.
        </p>
      </div>
    </div>{" "}
    {/* /section-intro */}
    <div className="row contact-form">
      <div className="col-twelve">
        {/* form */}
        <form name="contactForm" id="contactForm" method="post" action="">
          <fieldset>
            <div className="form-field">
              <input
                name="contactName"
                type="text"
                id="contactName"
                placeholder="Name"
                defaultValue=""
                minLength={2}
                required=""
              />
            </div>
            <div className="form-field">
              <input
                name="contactEmail"
                type="email"
                id="contactEmail"
                placeholder="Email"
                defaultValue=""
                required=""
              />
            </div>
            <div className="form-field">
              <input
                name="contactSubject"
                type="text"
                id="contactSubject"
                placeholder="Subject"
                defaultValue=""
              />
            </div>
            <div className="form-field">
              <textarea
                name="contactMessage"
                id="contactMessage"
                placeholder="message"
                rows={10}
                cols={50}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-field">
              <button className="submitform">Submit</button>
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1" />
                  <div className="bounce2" />
                  <div className="bounce3" />
                </div>
              </div>
            </div>
          </fieldset>
        </form>{" "}
        {/* Form End */}
        {/* contact-warning */}
        <div id="message-warning"></div>
        {/* contact-success */}
        <div id="message-success">
          <i className="fa fa-check" />
          Your message was sent, thank you!
          <br />
        </div>
      </div>{" "}
      {/* /col-twelve */}
    </div>{" "}
    {/* /contact-form */}
    <div className="row contact-info">
      <div className="col-four tab-full">
        <div className="icon">
          <i className="icon-pin" />
        </div>
        <h5>Where to find me</h5>
        <p>
          1600 Amphitheatre Parkway
          <br />
          Mountain View, CA
          <br />
          94043 US
        </p>
      </div>
      <div className="col-four tab-full collapse">
        <div className="icon">
          <i className="icon-mail" />
        </div>
        <h5>Email Me At</h5>
        <p>
          someone@kardswebsite.com
          <br />
          info@kardswebsite.com
        </p>
      </div>
      <div className="col-four tab-full">
        <div className="icon">
          <i className="icon-phone" />
        </div>
        <h5>Call Me At</h5>
        <p>
          Phone: (+63) 555 1212
          <br />
          Mobile: (+63) 555 0100
          <br />
          Fax: (+63) 555 0101
        </p>
      </div>
    </div>{" "}
    {/* /contact-info */}
  </section>{" "}
  {/* /contact */}
  {/* footer
   ================================================== */}
  <footer>
    <div className="row">
      <div className="col-six tab-full pull-right social">
        <ul className="footer-social">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-six tab-full">
        <div className="copyright">
          <span>© Copyright Kards 2016.</span>
          <span>
            Design by <a href="http://www.styleshout.com/">styleshout</a>
          </span>
        </div>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <i className="fa fa-long-arrow-up" />
        </a>
      </div>
    </div>{" "}
    {/* /row */}
  </footer>


</>

  )
}

export default App
