import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
    <div class="logo">📘 StudentHub</div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="aboutsectoin.html">About</a></li>
        <li><a href="contactpaege.html">Contact</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>

    <div class="header-right">
      <div class="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <a href="loginpage.html"><button class="login-btn">Log in</button></a>
      <button class="login-btn">sign up</button>
      <button id="theme-toggle">🌙 </button>
    </div>
  </header>

   {/* <!-- Hero Section -->*/}
  <section class="hero">
    <div class="hero-text">
      <h1>Empowering your academic journey!</h1>
      <p><h3 style="font-style: italic;">Access resources for all your study needs. <span style="font-size:40px;">!</span></h3></p>
      <a href="loginpage.html"><button>Log-In now</button></a>
      <button>Get help</button>
    </div>
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Graduation Cap">
  </section>
  
  <div class="section2">
    <h1 style="text-align: center; margin: 20px;">Welcome to StudentHub</h1>
    <p style="text-align: center; margin: 0 20px 20px 20px;">Your one-stop platform for all academic resources and support. Join our community of learners and take your studies to the next level!</p>

  </div>
  {/* <!-- Stats Section -->*/}
  <section class="stats">
    <div class="stat-box">
      <p>Active users</p>
      <h2>500K+</h2>
    </div>
    <div class="stat-box">
      <p>Resources available</p>
      <h2>10K+</h2>
    </div>
    <div class="stat-box">
      <p>Projects completed</p>
      <h2>2M+</h2>
    </div>
    <div class="stat-box">
      <p>Request support</p>
      <h2>Help Center</h2>
    </div>
  </section>
  



  <div class="section6">
    
   {/* <!-- Purpose -->*/}
   <div class="purpose">
    <h2>Our Purpose and Goals</h2>
    <p>
      We are a team of passionate developers dedicated to creating a platform that empowers students in their academic journey. Our goal is to provide easy access to resources, support, and a community where students can thrive
      The Student Services Hub is dedicated to providing essential resources and support to students, 
      helping them navigate their educational journey with ease and confidence. Our goal is to foster an 
      environment of growth and development by offering tailored services that meet the unique needs of every student.
    </p>
   </div>

   {/* <!-- Meet Our Team -->*/}
    <div class="team">
      <h2>Meet Our Developers Team</h2>
      <div class="team-members">
        <div class="member">
          <img src="mypic.jpg" alt="Ashutosh Das">
          <h3>Ashutosh Das</h3>
          <p>Project Manager</p>
        </div>
        <div class="member">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Lee">
          <h3>Anuj Kumar</h3>
            <p>Software</p>
        </div>
        <div class="member">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Chen">
          <h3>Ashu Kumar</h3>
          <p>UX Designer</p>
        </div>
     </div>
    </div>

  {/*  <!-- Testimonials -->*/}
  <div class="testimonials">
    <h2>Testimonials</h2>
    <div class="testimonial">
      <p>"The Student Services Hub has been a game-changer for me. The support and resources available are incredible!"</p>
      <span>- Abhikant</span>
    </div>
    <div class="testimonial">
      <p>"Thanks to the Student Services Hub, I was able to navigate my academic challenges with ease. Highly recommend!"</p>
      <span>- Abhishek</span>
    </div>
  </div>

    {/* <!-- Our Journey --> */}
  <div class="journey">
    <h2>Our Journey</h2>
    <p>
      The Student Services Hub was founded in 2015 with the vision of transforming student support services. 
      Over the years, we have expanded our offerings and grown our team, reaching thousands of students worldwide. 
      Our commitment to innovation and student success has driven us to continuously improve and adapt.
    </p>
  </div>
</div>


  {/* <!-- Footer -->  */}
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

  <script>
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      toggleBtn.textContent = "🌙";
    } else {
      toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
      } else {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      }
    });
  </script>

    </>
  )
}

export default App
