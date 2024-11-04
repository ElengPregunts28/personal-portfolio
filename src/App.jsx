function App() {
  return (
    <>
     <body id="top">

        {/* header 
        ================================================== */}
        <header>   	
          <div className="row">

            <div className="top-bar">
              <a className="menu-toggle" href="#"><span>Menu</span></a>

              <div className="logo">
                  <a href="index.html">KARDS</a>
                </div>		      

              <nav id="main-nav-wrap">
                <ul className="main-navigation">
                  <li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
                  <li><a className="smoothscroll"  href="#about" title="">About</a></li>
                  <li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
                  <li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
                  <li><a className="smoothscroll"  href="#services" title="">Services</a></li>					
                  <li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>	
                  <li><a href="styles.html" title="">Style Demo</a></li>				
                </ul>
              </nav>    		
            </div> {/* /top-bar */} 
            
          </div> {/* /row */} 		
        </header> {/* /header */}

        {/* intro section
        ================================================== */}
        <section id="intro">   

          <div className="intro-overlay"></div>	

          <div className="intro-content">
            <div className="row">

              <div className="col-twelve">

                <h5>Hello, World.</h5>
                <h1>I'm Juan Dela Cruz.</h1>

                <p className="intro-position">
                  <span>Front-end Developer</span>
                  <span>UI/UX Designer</span> 
                </p>

                <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

              </div>  
              
            </div>   		 		
          </div> {/* /intro-content */} 

          <ul className="intro-social">        
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul> {/* /intro-social */}      	

        </section> {/* /intro */}


        {/* about section
        ================================================== */}
        <section id="about">  

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>About</h5>
              <h1>Let me introduce myself.</h1>

              <div className="intro-info">

                <img src="images/profile-pic.jpg" alt="Profile Picture" />

                <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
              </div>   			

            </div>   		
          </div> {/* /section-intro */}

          <div className="row about-content">

            <div className="col-six tab-full">

              <h3>Profile</h3>
              <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

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

              </ul> {/* /info-list */}

            </div>

            <div className="col-six tab-full">

              <h3>Skills</h3>
              <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

              <ul className="skill-bars">
                <li>
                  <div className="progress percent90"><span>90%</span></div>
                  <strong>HTML5</strong>
                </li>
                <li>
                  <div className="progress percent85"><span>85%</span></div>
                  <strong>CSS3</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>JQuery</strong>
                </li>
                <li>
                  <div className="progress percent95"><span>95%</span></div>
                  <strong>PHP</strong>
                </li>
                <li>

                  <div className="progress percent75"><span>75%</span></div>
                  <strong>Wordpress</strong>
                </li>
            
              </ul> {/* /skill-bars */}		

            </div>

          </div>

          <div className="row button-section">
            <div className="col-twelve">
              <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
              <a href="#" title="Download CV" className="button button-primary">Download CV</a>
            </div>   		
          </div>

        </section> {/* /process*/}    


        {/* resume Section
        ================================================== */}
        <section id="resume" className="grey-section">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Resume</h5>
              <h1>More of my credentials.</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>   		
          </div> {/* /section-intro*/} 

          <div className="row resume-timeline">

            <div className="col-twelve resume-header">

              <h2>Work Experience</h2>

            </div> {/* /resume-header */}

            <div className="col-twelve">

              <div className="timeline-wrap">

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>UI Designer</h3>
                    <p>July 2015 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Awesome Studio</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                  </div>

                </div> {/* /timeline-block */}

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Front-end Developer</h3>
                    <p>July 2014 - June 2015</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Super Cool Agency</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                  </div>

                </div> {/* /timeline-block */}

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Web Designer</h3>
                    <p>May 2013 - June 2014</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Great Designs Studio</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                  </div>

                </div> {/* /timeline-block */}

              </div> {/* /timeline-wrap */}   			

            </div> {/* /col-twelve */}
            
          </div> {/* /resume-timeline */}
          
          <div className="row resume-timeline">

            <div className="col-twelve resume-header">

              <h2>Education</h2>

            </div> {/* /resume-header */}

            <div className="col-twelve">

              <div className="timeline-wrap">

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Master Degree</h3>
                    <p>July 2015 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h4>University of Life</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                  </div>

                </div> {/* /timeline-block */}

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Bachelor Degree</h3>
                    <p>July 2014 - June 2015</p>
                  </div>

                  <div className="timeline-content">
                    <h4>State Design University</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                  </div>

                </div> {/* /timeline-block */}

                <div className="timeline-block">

                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Bachelor Degree</h3>
                    <p>May 2013 - June 2014</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Design College</h4>
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                  </div>

                </div> {/* /timeline-block */}

              </div> {/* /timeline-wrap */}   			

            </div> {/* /col-twelve */}
            
          </div> {/* /resume-timeline */}
          
        </section> {/* /features */}


        {/* Portfolio Section
        ================================================== */}
        <section id="portfolio">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>   		
          </div> {/* /section-intro*/} 

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
                                <span className="folio-types">
                                    Graphic Design
                                </span>
                            </div>	                      	
                            </div>                    
                          </a>
                      </div>	               
                    </div> {/* /folio-item */}

                    <div className="bgrid folio-item">
                      <div className="item-wrap">
                        <img src="images/portfolio/shutterbug.jpg" alt="Shutterbug" />
                        <a href="#modal-02" className="overlay">              		                  
                            <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Shutterbug</h3>	     					    
                              <span className="folio-types">
                                    Web Design
                              </span>		     		
                            </div> 	                      	
                            </div>                    
                          </a>
                      </div>
                    </div> {/* /folio-item */}

                    <div className="bgrid folio-item">
                      <div className="item-wrap">
                        <img src="images/portfolio/clouds.jpg"alt="Clouds" />
                          <a href="#modal-03" className="overlay">             		                  
                            <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Clouds</h3>	     					    
                              <span className="folio-types">
                                    Web Design
                              </span>		     		
                            </div> 	                      	
                            </div>                    
                          </a>
                      </div>
                    </div> {/* /folio-item */}

                    <div className="bgrid folio-item">
                      <div className="item-wrap">
                        <img src="images/portfolio/beetle.jpg" alt="Beetle" />
                          <a href="#modal-04" className="overlay">                  	                 
                            <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Beetle</h3>	     					    
                              <span className="folio-types">
                                    Branding
                              </span>		     		
                            </div>  	                      	
                            </div>                    
                          </a>
                      </div>
                    </div> {/* /folio-item */}     

                    <div className="bgrid folio-item">
                      <div className="item-wrap">
                        <img src="images/portfolio/lighthouse.jpg" alt="Lighthouse" />
                          <a href="#modal-05" className="overlay">             		                  
                            <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Lighthouse</h3>	     					    
                              <span className="folio-types">
                                    Web Development
                              </span>		     		
                            </div> 	                      	
                            </div>                    
                          </a>
                      </div>
                    </div> {/* /folio-item */}

                    <div className="bgrid folio-item">
                      <div className="item-wrap">
                        <img src="images/portfolio/salad.jpg" alt="Salad" />
                          <a href="#modal-06" className="overlay">
                            <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Salad</h3>	     					    
                              <span className="folio-types">
                                    Branding
                              </span>		     		
                            </div>	                      	
                            </div>                    
                          </a>
                      </div>
                    </div> {/* /folio-item */}   

                    {/* modal popups - begin
                    ============================================================= */}
                    <div id="modal-01" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Liberty</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Development</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-01 */}

                <div id="modal-02" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Shutterbug</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Design</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-02 */}

                <div id="modal-03" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Clouds</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Design</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-03 */}

                <div id="modal-04" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Beetle</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Branding</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-04 */}

                <div id="modal-05" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Lighthouse</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Development</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-05 */}

                <div id="modal-06" className="popup-modal slider mfp-hide">	

                    <div className="media">
                      <img src="images/portfolio/modals/m-salad.jpg" alt="" />
                    </div>      	

                  <div className="description-box">
                      <h4>Salad</h4>		      
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Branding</div>			               
                  </div>

                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>		      

                </div> {/* /modal-06 */}


                {/* modal popups - end
                    ============================================================= */}

                </div> {/* /portfolio-wrapper */} 

            </div>  {/* /twelve */}   

          </div> {/* /portfolio-content */} 
          
        </section> {/* /portfolio */} 


        {/* CTA Section
        ================================================== */}
        <section id="cta" className="grey-section">

          <div className="row cta-content">

            <div className="col-twelve section-ads">  

                <h2 className="h01"><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a></h2>

                <p className="lead">
                Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
              Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>. 
              {/* Simply type	the promocode in the box labeled “Promo Code” when placing your order. */}	
              </p>

              <div className="action">
                  <a className="button button-primary large" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
                </div>		     	

            </div>

          </div> {/* /cta-content */}

        </section> {/* /cta */} 


        {/* services Section
        ================================================== */}
        <section id="services">

          <div className="overlay"></div>

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Services</h5>
              <h1>What Can I Do For You?</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>   		
          </div> {/* /section-intro */}

          <div className="row services-content">

            <div id="owl-slider" className="owl-carousel services-list">

                <div className="service">	

                  <span className="icon"><i className="icon-earth"></i></span>            

                    <div className="service-content">	

                      <h3>Webdesign</h3>

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                    
                  </div> 	         	 

              </div> {/* /service */}

              <div className="service">	

                <span className="icon"><i className="icon-window"></i></span>                          

                    <div className="service-content">	

                      <h3>Web Development</h3>  

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>

                    </div>	                          

              </div> {/* /service */}

              <div className="service">

                <span className="icon"><i className="icon-paint-brush"></i></span>		            

                    <div className="service-content">

                      <h3>Branding</h3>

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                      </p> 

                    </div> 	            	               

              </div> {/* /service */}

              <div className="service">

                <span className="icon"><i className="icon-toggles"></i></span>	              

                    <div className="service-content">

                      <h3>UI/UX Design</h3>

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p> 
                    
                    </div>                

              </div> {/* /service */}

              <div className="service">

                <span className="icon"><i className="icon-image"></i></span>	            

                    <div className="service-content">

                      <h3>Graphics Design</h3>

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                      </p> 

                    </div>	               

              </div> {/* /service */}

              <div className="service">

                <span className="icon"><i className="icon-chat"></i></span>	   	           

                    <div className="service-content">

                      <h3>Consultancy</h3>

                      <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                      </p> 
                      
                    </div>	               

              </div> {/* /service */}

              </div> {/* /services-list */}
            
          </div> {/* /services-content */}
          
        </section> {/* /services */}	


        {/* stats Section
        ================================================== */}
        <section id="stats" className="count-up">

          <div className="row">
            <div className="col-twelve">

              <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-pencil-ruler"></i>
                  </div>

                  <h3 className="stat-count">
                    1500
                  </h3>

                  <h5 className="stat-title">
                    Projects Completed
                  </h5>

                </div> {/* /stat */}					

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-users"></i>
                  </div>

                  <h3 className="stat-count">
                    900
                  </h3>

                  <h5 className="stat-title">
                    Happy Clients
                  </h5>

                </div> {/* /stat */}

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-badge"></i>
                  </div>

                  <h3 className="stat-count">
                    200
                  </h3>

                  <h5 className="stat-title">
                    Awards Received
                  </h5>

                </div> {/* /stat */}									

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-light-bulb"></i>
                  </div>

                  <h3 className="stat-count">
                    120
                  </h3>

                  <h5 className="stat-title">
                    Crazy Ideas
                  </h5>

                </div> {/* /stat */}

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-cup"></i>
                  </div>

                  <h3 className="stat-count">
                    1500
                  </h3>

                  <h5 className="stat-title">
                    Coffee Cups
                  </h5>

                </div> {/* /stat */}

                <div className="bgrid stat">

                  <div className="icon-part">
                    <i className="icon-clock"></i>
                  </div>

                  <h3 className="stat-count">
                    7200
                  </h3>

                  <h5 className="stat-title">
                    Hours
                  </h5>

                </div> {/* /stat */}

              </div> {/* /stats-list */}

            </div> {/* /twelve */}
          </div> {/* /row */}

        </section> {/* /stats */}


        {/* contact
        ================================================== */}
        <section id="contact">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Contact</h5>
              <h1>I'd Love To Hear From You.</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div> 
          </div> {/* /section-intro */}

          <div className="row contact-form">

            <div className="col-twelve">

                  {/* form */}
                  <form name="contactForm" id="contactForm" method="post" action="">
                  <fieldset>

                        <div className="form-field">
                      <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" />
                        </div>
                        <div className="form-field">
                      <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" />
                      </div>
                        <div className="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" />
                      </div>                       
                        <div className="form-field">
                          <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
                      </div>                      
                      <div className="form-field">
                          <button className="submitform">Submit</button>
                          <div id="submit-loader">
                              <div className="text-loader">Sending...</div>                             
                          <div className="s-loader">
                          <div className="bounce1"></div>
                          <div className="bounce2"></div>
                          <div className="bounce3"></div>
                      </div>
                    </div>
                        </div>

                  </fieldset>
                </form> {/* Form End */}

                  {/* contact-warning */}
                  <div id="message-warning">            	
                  </div>            
                  {/* contact-success */}
                <div id="message-success">
                    <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                </div>

              </div> {/* /col-twelve */}
            
          </div> {/* /contact-form */}

          <div className="row contact-info">

            <div className="col-four tab-full">

              <div className="icon">
                <i className="icon-pin"></i>
              </div>

              <h5>Where to find me</h5>

              <p>
                  1600 Amphitheatre Parkway<br />
                  Mountain View, CA<br />
                  94043 US
                  </p>

            </div>

            <div className="col-four tab-full collapse">

              <div className="icon">
                <i className="icon-mail"></i>
              </div>

              <h5>Email Me At</h5>

              <p>someone@kardswebsite.com<br />
                info@kardswebsite.com			     
              </p>

            </div>

            <div className="col-four tab-full">

              <div className="icon">
                <i className="icon-phone"></i>
              </div>

              <h5>Call Me At</h5>

              <p>Phone: (+63) 555 1212<br />
                Mobile: (+63) 555 0100<br />
                  Fax: (+63) 555 0101
              </p>

            </div>
            
          </div> {/* /contact-info */}
          
        </section> {/* /contact */}


        {/* footer
        ================================================== */}

        <footer>
            <div className="row">

              <div className="col-six tab-full pull-right social">

                <ul className="footer-social">        
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul> 
                  
              </div>

              <div className="col-six tab-full">
                <div className="copyright">
                    <span>© Copyright Kards 2016.</span> 
                    <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>	         	
                  </div>		                  
                </div>

                <div id="go-top">
                  <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
                </div>

              </div> {/* /row */}     	
        </footer>  

        </body>
    </>
  )
}

export default App
