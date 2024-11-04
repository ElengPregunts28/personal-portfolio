

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
          <h1>I'm Ellaine Pregunta.</h1>
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
        <a href="https://www.facebook.com/eleng.pregunta">
          <i className="fa fa-facebook" href=""/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ellainezch_">
          <i className="fa fa-instagram" href=""/>
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
          <img src="images/prof-img.jpg" alt="Profile Picture" />
          <p className="lead">
          Energetic student eager to build professional abilities while pursuing Bachelor of Science in Information System degree. Motivated, enthusiastic and friendly with strong communication and teamwork abilities.
          </p>
        </div>
      </div>
    </div>{" "}
    {/* /section-intro */}
    <div className="row about-content">
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p>
        Newly graduated professional with software development project experience. Focused, results-driven and knowledgeable in multiple computer languages. Seeking an opportunity to enhance various software packages.
        </p>
        <ul className="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>Maria Ellaine Pregunta</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>February 28, 2004</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Freelancer, Frontend Developer</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>ellainepregunta28@gmail.com</span>
          </li>
        </ul>{" "}
        {/* /info-list */}
      </div>
      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p>
        Throughout my journey, I have acquired a diverse set of skills that I am eager to apply and further develop. Here’s a snapshot of what I bring to the table:
        </p>
        <ul className="skill-bars">
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>Teamwork</strong>
          </li>
          <li>
            <div className="progress percent85">
              <span>85%</span>
            </div>
            <strong>Communication</strong>
          </li>
          <li>
            <div className="progress percent70">
              <span>70%</span>
            </div>
            <strong>Problem Solving</strong>
          </li>
          <li>
            <div className="progress percent95">
              <span>95%</span>
            </div>
            <strong>UI/UX Design</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>Front-End Developer</strong>
          </li>
        </ul>{" "}
        {/* /skill-bars */}
      </div>
    </div>
    <div className="row button-section">
      <div className="col-twelve">
        <a href="Curriculum_Vitae.pdf" title="Download CV" className="button button-primary">
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
        Throughout my academic and professional journey, I have consistently demonstrated a commitment to excellence and continuous learning. My credentials reflect a blend of rigorous education and practical experience, equipping me with the skills and knowledge necessary to excel in the field of Information Systems
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

          </div>{" "}
          {/* /timeline-block */}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-briefcase" />
            </div>
            <div className="timeline-header">
              <h3>Cashier Assistant</h3>
              <p>January 2024 - Present</p>
            </div>
            <div className="timeline-content">
              <h4>Nora Pregunta Poultry Supply</h4>
              <p>
              Motivated Cashier with a record of success in providing exceptional service and sales support in retail environments. Offering established numerical and communication abilities. Strong team player committed to assisting colleagues and management with all activities necessary for store success.
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
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-header">
              <h3>Associate Degree</h3>
              <p>September 2022 - July 2024</p>
            </div>
            <div className="timeline-content">
              <h4>La Verdad Christian College</h4>
              <p>
              I graduated with an Associate in Computer Technology degree from La Verdad Christian College in July 2024. This program provided me with a solid foundation in computer systems, software applications, and information technology. Throughout my studies, I gained practical experience in areas such as computer programming, network administration, database management, and web development. These skills have equipped me to tackle various challenges in the IT industry and contribute effectively to any team or project.


              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>August 2024 - Present</p>
            </div>
            <div className="timeline-content">
              <h4>La Verdad Christian College</h4>
              <p>
              Currently, I am pursuing my Bachelor of Science in Information Systems at La Verdad Christian College. This program is further enhancing my technical skills and knowledge, preparing me for more advanced roles in the field. I am eager to continue building my professional abilities and applying my expertise to real-world projects.
              </p>
            </div>
          </div>{" "}
          {/* /timeline-block */}
        
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
        Here are some of my projects I created during my academic journey and personal endeavors. Each project showcases my skills and dedication to the field of Information Systems.
        <br />
        <br />
        Feel free to explore these projects to see my work in action!
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
        I look forward to connecting with you and discussing how we can collaborate on exciting projects. Your feedback and insights are invaluable, and I am eager to hear your thoughts. Let's create something amazing together!
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
          Mac Arthur Highway Sampaloc
          <br />
          Apalit, Pampanga
          <br />
          2016 Philippines
        </p>
      </div>
      <div className="col-four tab-full collapse">
        <div className="icon">
          <i className="icon-mail" />
        </div>
        <h5>Email Me At</h5>
        <p>
          ellainepregunta26@gmail.com
          <br />
          ellainepregunta28@gmail.com
        </p>
      </div>
      <div className="col-four tab-full">
        <div className="icon">
          <i className="icon-phone" />
        </div>
        <h5>Call Me At</h5>
        <p>
          Phone: (+63) 981 255 9915
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
            <a href="https://www.facebook.com/eleng.pregunta">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ellainezch_">
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
