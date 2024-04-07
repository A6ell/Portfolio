import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTelegram,
  faInstagram,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';


import profileImage from './assets/profile.jpg';
import comingSoon from './assets/comingSoon.jpg';
import egovImage from './assets/egovImage.png';
import CVAbel_Demere from './assets/CVAbel_Demere.jpg';
import CVAbel_DemerePDF from './assets/CVAbel_Demere.pdf';
import './Portfolio.css';

function Portfolio() {
  const [expanded, setExpanded] = useState(false);

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = CVAbel_DemerePDF;
    link.download = 'CVAbel_Demere.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
        <div className="container">
          <div className="header__content">
            <div className="header__logo-container">
              <Link to="/" className="navbar-brand">A6el</Link>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${expanded ? 'show' : ''} transition-all duration-500`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={() => setExpanded(false)}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume" onClick={() => setExpanded(false)}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" onClick={() => setExpanded(false)}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => setExpanded(false)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 maintext">
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="background-container mt-4 pt-4">
          <h1 className="text-center">About Me</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img src={profileImage} className="imageAboutPage img-fluid" alt="Profile" />
            </div>

            <div className="col-lg-8">
              <div className="row mt-3">
                <div className="col-md-6">
                  <ul>
                    <li>Name: Abel Demere</li>
                    <li>Age: 26</li>
                    <li>Occupation: Fullstack Developer</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>I am a Fullstack Developer. With a passion for programming and problem-solving, I have dedicated myself to honing my skills and expertise in web development. I strive to create innovative and efficient solutions that meet the needs of modern businesses and users.</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p>My dedication to continuous learning and staying up-to-date with the latest industry trends allows me to deliver high-quality code and create seamless user experiences. I am driven by the desire to contribute to the advancement of technology and make a positive impact in the digital world.</p>
                  <p>Let's connect and explore how we can work together to create exceptional web solutions that elevate user experiences and drive business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="container mt-4 pt-4">
          <h1 className="text-center">Resume</h1>
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-4">
              <Link to="/Resume" className="text-decoration-none">
                <div className="card">
                  <img className="card-img-top-resume" src={CVAbel_Demere} alt="Card image" />
                  <div className="card-body">
                    <h4 className="card-title text-center">CV</h4>
                    <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                      <button className="btn btn-success click-button hover-text" style={{ color: 'white', background: 'black' }} onClick={handleDownloadClick}>Download PDF</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container mt-3">
          <h1 className="text-center">Projects</h1>
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img className="card-img-top" src={egovImage} alt="EGOV - Streamlining Government Services" style={{ objectFit: 'cover', height: '100%' }} />
                <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                  <a href="https://electronic-government-services-ngubnb4ux-iyasu2s-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <span className=" btn .egov-btn " style={{ color: 'white', background: 'black' }}>Click here to visit</span>
                  </a>
                </div>

                <div className="card-body" >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center" >E-Gov</h2>
                      <p className="description-area">A project aimed at simplifying government ID registration and service applications through an online platform.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
  <h2 className="text-center">Tech Used</h2>
  <dl className="description-area">
    <div className="tech-item">
      <dt>Frontend:</dt>
      <dd>HTML, CSS, Javascript & Python</dd>
    </div>
    <div className="tech-item">
      <dt>UI:</dt>
      <dd>Bootstrap</dd>
    </div>
    <div className="tech-item">
      <dt>Backend:</dt>
      <dd>Flask</dd>
    </div>
    <div className="tech-item">
      <dt>Database:</dt>
      <dd>SQLite</dd>
    </div>
  </dl>
</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img className="card-img-top" src={comingSoon} alt="Card image" style={{ objectFit: 'cover', height: '100%' }} />
                <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                  <span className="btn" style={{ color: 'white', background: 'black' }}>Coming Soon</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center" >Ecommerce Web app</h2>
                      <p className="description-area" style={{ color: 'red' }}>!!! Under Development.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
  <h2 className="text-center">Tech Used</h2>
  <dl className="description-area">
    <div className="tech-item">
      <dt>Frontend:</dt>
      <dd>CSS, Javascript, React.js</dd>
    </div>
    <div className="tech-item">
      <dt>UI:</dt>
      <dd>Bootstrap & Shadcn</dd>
    </div>
    <div className="tech-item">
      <dt>Backend:</dt>
      <dd>Express.js</dd>
    </div>
    <div className="tech-item">
      <dt>Database:</dt>
      <dd>PostgreSQL</dd>
    </div>
  </dl>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container mt-3">
          <h1 className="text-center">Contact Me</h1>
        </div>
      </section>

      <footer id="footer">
  <div className="container-fluid">
    <div className="social-icons mt-4">
    <a href="https://github.com/A6ell" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <FontAwesomeIcon className='social-icons-color' icon={faGithub} />
      </a>
      <a href="https://t.me/abel_d" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <FontAwesomeIcon className='social-icons-color' icon={faTelegram} />
      </a>
      <a href="https://www.instagram.com/a6el.d/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <FontAwesomeIcon className='social-icons-color' icon={faInstagram} />
      </a>
      <a href="https://twitter.com/A6elDemere" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <FontAwesomeIcon className='social-icons-color' icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/abel-demere-a6282a281/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <FontAwesomeIcon className='social-icons-color' icon={faLinkedin} />
      </a>
      
    </div>
  </div>
</footer>

    </div>
  );
}

export default Portfolio;