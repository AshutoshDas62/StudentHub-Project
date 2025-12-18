
function LandingPage() {
  return (
    <div>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StudentHub</title>
        <style dangerouslySetInnerHTML={{__html: "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: Arial, sans-serif;\n    }\n\n    body {\n      background-color: #1e1e1e;\n      color: #fff;\n      transition: background 0.3s, color 0.3s;\n      padding-top: 35px;\n    }\n\n    header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 15px 30px;\n      background: #1e1e1e;\n      flex-wrap: wrap;\n      gap: 15px;\n      transition: background 0.3s;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      z-index: 1000;\n    \n    }\n\n    .logo {\n      font-weight: bold;\n      font-size: 20px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    nav ul {\n      display: flex;\n      list-style: none;\n      gap: 60px;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n\n    nav ul li a {\n      text-decoration: none;\n      color: #fff;\n      font-size: 20px;\n      transition: 0.3s;\n    }\n\n    nav ul li a:hover {\n      color: #6325a7;\n      text-decoration: underline;\n      \n    }\n\n    .header-right {\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      gap: 10px;\n    }\n\n    /* Search Bar */\n    .search-container {\n      display: flex;\n      align-items: center;\n      background: #2a2a2a;\n      border-radius: 20px;\n      padding: 5px 10px;\n      transition: background 0.3s;\n    }\n\n    .search-container input {\n      border: none;\n      outline: none;\n      background: transparent;\n      color: #fff;\n      padding: 6px 10px;\n      width: 160px;\n    }\n\n    .search-container button {\n      background: #fff;\n      color: #000;\n      border: none;\n      padding: 6px 12px;\n      border-radius: 15px;\n      cursor: pointer;\n      font-size: 14px;\n      transition: background 0.3s, color 0.3s;\n    }\n\n    .search-container button:hover {\n      background: #ddd;\n    }\n\n    .login-btn,\n    #theme-toggle {\n      background: #fff;\n      color: #000;\n      border: none;\n      padding: 8px 16px;\n      border-radius: 20px;\n      cursor: pointer;\n      font-size: 14px;\n      transition: background 0.3s, color 0.3s;\n    }\n\n    /* Hero Section */\n    .hero {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 60px;\n      background: #2a2a2a;\n      border-radius: 20px;\n      margin: 20px;\n      transition: background 0.3s;\n      flex-wrap: wrap;\n      gap: 20px;\n      height: 500px;\n    }\n\n    .hero-text {\n      flex: 1;\n      min-width: 250px;\n    }\n\n    .hero-text h1 {\n      font-size: 36px;\n      margin-bottom: 15px;\n    }\n\n    .hero-text p {\n      font-size: 16px;\n      margin-bottom: 25px;\n      color: #bbb;\n    }\n\n    .hero-text button {\n      background: #fff;\n      color: #000;\n      border: none;\n      padding: 12px 24px;\n      border-radius: 25px;\n      margin-right: 10px;\n      cursor: pointer;\n      font-size: 15px;\n      transition: background 0.3s, color 0.3s;\n    }\n\n    .hero-text button:hover {\n      background: #ddd;\n    }\n\n    .hero img {\n      width: 120px;\n    }\n\n    /* Stats Section */\n    .stats {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 20px;\n      margin: 40px 20px;\n    }\n\n    .stat-box {\n      background: #2a2a2a;\n      padding: 25px;\n      border-radius: 15px;\n      text-align: center;\n      transition: background 0.3s;\n    }\n\n    .stat-box h2 {\n      font-size: 26px;\n      margin: 10px 0;\n    }\n\n    .stat-box p {\n      color: #bbb;\n      font-size: 15px;\n    }\n\n    /* Section 6 */\n    \n.section6 {\n  padding: 60px 20px;\n  max-width: 1200px;\n  margin: auto;\n}\n\n/* Purpose */\n.section6 h2 {\n  margin-bottom: 15px;\n  font-size: 34px;\n  text-align: center;\n}\n\n.section6 p {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #bbb;\n}\n\n/* Team */\n.team {\n  margin: 40px 0;\n}\n\n.team-members {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.member {\n  text-align: center;\n  max-width: 200px;\n}\n\n.member img {\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-bottom: 10px;\n}\n\n.member h3 {\n  font-size: 18px;\n  margin: 0px 0px 5px 45px;\n  \n}\n\n.member p {\n  font-size: 14px;\n  color: #bbb;\n  margin:0px 0px 5px 45px;\n}\n\n/* Testimonials */\n.testimonials {\n  margin: 50px 0;\n}\n\n.testimonial {\n  background: #2a2a2a;\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n\n.testimonial p {\n  font-size: 15px;\n  font-style: italic;\n  margin-bottom: 10px;\n  color: #fff;\n}\n\n.testimonial span {\n  font-size: 14px;\n  color: #bbb;\n}\n\n/* Journey */\n.journey {\n  margin-top: 40px;\n}\n\n/* Light Mode Support */\nbody.light-mode .about p,\nbody.light-mode .member p,\nbody.light-mode .testimonial span {\n  color: #333;\n}\n\nbody.light-mode .testimonial {\n  background: #f0f0f0;\n}\n\nbody.light-mode .testimonial p {\n  color: #000;\n}\n\n/* Responsive */\n@media(max-width: 768px) {\n  .team-members {\n    flex-direction: column;\n    align-items: center;\n  }\n  .member {\n    max-width: 100%;\n  }\n}\n    /* Footer */\n    footer {\n      background: #2a2a2a;\n      padding: 40px 20px;\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 20px;\n      transition: background 0.3s;\n    }\n\n    footer h3 {\n      margin-bottom: 10px;\n      font-size: 16px;\n    }\n\n    footer a {\n      display: block;\n      text-decoration: none;\n      color: #bbb;\n      font-size: 14px;\n      margin-bottom: 8px;\n      transition: 0.3s;\n    }\n\n    footer a:hover {\n      color: #fff;\n    }\n\n    /* Light Mode */\n    body.light-mode {\n      background: #ffffff;\n      color: #000;\n    }\n\n    body.light-mode header {\n      background: #f4f4f4;\n    }\n\n    body.light-mode nav ul li a {\n      color: #000;\n    }\n\n    body.light-mode .search-container {\n      background: #f0f0f0;\n    }\n\n    body.light-mode .search-container input {\n      color: #000;\n    }\n\n    body.light-mode .search-container button,\n    body.light-mode .login-btn,\n    body.light-mode #theme-toggle,\n    body.light-mode .hero-text button {\n      background: #000;\n      color: #fff;\n    }\n\n    body.light-mode .hero {\n      background: #f0f0f0;\n    }\n\n    body.light-mode .hero-text p {\n      color: #333;\n    }\n\n    body.light-mode .stat-box {\n      background: #f0f0f0;\n    }\n\n    body.light-mode footer {\n      background: #f4f4f4;\n    }\n\n    body.light-mode footer a {\n      color: #333;\n    }\n\n    /* Responsive */\n    @media(max-width: 900px) {\n      .hero {\n        flex-direction: column;\n        text-align: center;\n      }\n      .hero img {\n        margin-top: 20px;\n      }\n      .stats {\n        grid-template-columns: repeat(2, 1fr);\n      }\n      footer {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    @media(max-width: 600px) {\n      nav ul {\n        flex-direction: column;\n        gap: 10px;\n      }\n      .stats {\n        grid-template-columns: 1fr;\n      }\n      footer {\n        grid-template-columns: 1fr;\n      }\n      .search-container input {\n        width: 120px;\n      }\n    }\n  " }} />
        {/* Header */}
        <header>
          <div className="logo">📘 StudentHub</div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="aboutsectoin.html">About</a></li>
              <li><a href="contactpaege.html">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </div>
            <a href="loginpage.html"><button className="login-btn">Log in</button></a>
            <button className="login-btn">sign up</button>
            <button id="theme-toggle">🌙 </button>
          </div>
        </header>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h1>Empowering your academic journey!</h1>
            <p /><h3 style={{fontStyle: 'italic'}}>Access resources for all your study needs. <span style={{fontSize: '40px'}}>!</span></h3><p />
            <a href="loginpage.html"><button>Log-In now</button></a>
            <button>Get help</button>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Graduation Cap" />
        </section>
        <div className="section2">
          <h1 style={{textAlign: 'center', margin: '20px'}}>Welcome to StudentHub</h1>
          <p style={{textAlign: 'center', margin: '0 20px 20px 20px'}}>Your one-stop platform for all academic resources and support. Join our community of learners and take your studies to the next level!</p>
        </div>
        {/* Stats Section */}
        <section className="stats">
          <div className="stat-box">
            <p>Active users</p>
            <h2>500K+</h2>
          </div>
          <div className="stat-box">
            <p>Resources available</p>
            <h2>10K+</h2>
          </div>
          <div className="stat-box">
            <p>Projects completed</p>
            <h2>2M+</h2>
          </div>
          <div className="stat-box">
            <p>Request support</p>
            <h2>Help Center</h2>
          </div>
        </section>
        <div className="section6">
          {/* Purpose */}
          <div className="purpose">
            <h2>Our Purpose and Goals</h2>
            <p>
              We are a team of passionate developers dedicated to creating a platform that empowers students in their academic journey. Our goal is to provide easy access to resources, support, and a community where students can thrive
              The Student Services Hub is dedicated to providing essential resources and support to students, 
              helping them navigate their educational journey with ease and confidence. Our goal is to foster an 
              environment of growth and development by offering tailored services that meet the unique needs of every student.
            </p>
          </div>
          {/* Meet Our Team */}
          <div className="team">
            <h2>Meet Our Developers Team</h2>
            <div className="team-members">
              <div className="member">
                <img src="src\assets\mypic.jpg" alt="Ashutosh Das" />
                <h3>Ashutosh Das</h3>
                <p>Project Manager</p>
              </div>
              <div className="member">
                <img src="src\assets\Anuj_photo.jpg" alt="Anuj Kumar Yadav" />
                <h3>Anuj Kumar</h3>
                <p>Software</p>
              </div>
              <div className="member">
                <img src="src\assets\ashu_photo.jpg" alt="Ashu Kumar" />
                <h3>Ashu Kumar</h3>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial">
              <p>"The Student Services Hub has been a game-changer for me. The support and resources available are incredible!"</p>
              <span>- Abhikant</span>
            </div>
            <div className="testimonial">
              <p>"Thanks to the Student Services Hub, I was able to navigate my academic challenges with ease. Highly recommend!"</p>
              <span>- Abhishek</span>
            </div>
          </div>
          {/* Our Journey */}
          <div className="journey">
            <h2>Our Journey</h2>
            <p>
              The Student Services Hub was founded in 2015 with the vision of transforming student support services. 
              Over the years, we have expanded our offerings and grown our team, reaching thousands of students worldwide. 
              Our commitment to innovation and student success has driven us to continuously improve and adapt.
            </p>
          </div>
        </div>
        {/* Footer */}
        <footer>
          <div>
            <h3>Review : User</h3>
            <p>Trusted by students</p>
          </div>
          <div>
            <h3>Learn More</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="contactpaege.html">Contact Us</a>
            <a href="#">Blog</a>  
          </div>
          <div>
            <h3>Community</h3>
            <a href="#">Support Center</a>
            <a href="#">Become a Member</a>
          </div>
          <div>
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </footer>
      </div>
  
    </div>
  );
}

export default LandingPage;
