import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>
        <i className="fas fa-space-shuttle"></i> Gierado Pham
      </h1>
      <p>Aerospace Engineer</p>
    </header>
  );
}

function Experience() {
  return (
    <section className="section">
      <h2><i className="fas fa-rocket"></i> Experience</h2>

      {/* Northrop Grumman */}
      <p className="company"><b>Northrop Grumman</b></p>
      <div className="indented-section">
        <p className="indented"><b>Guidance, Navigation, and Control Engineer</b></p>
        <p className="indented">02/2022 - Present</p>
        <ul className="indented">
          <li>Currently possess an active Secret Security Clearance.</li>
          <li>Developed and implemented robust and optimal control algorithms for autopilot systems.</li>
          <li>Proficient in Monte Carlo Analysis for system reliability assessment.</li>
          <li>Experienced in 3DOF and 6DOF simulation environments.</li>
          <li>Utilized C++, MATLAB, and Python for GNC algorithm development and verification, maintaining high code quality and standards</li>
          <li>Worked on various aerospace projects, including spacecraft design and mission planning, with a focus on advanced technology integration and system performance evaluation</li>
          <li>Implemented automated testing frameworks, resulting in a 30% reduction in error rates.</li>
          <li>Familiarity with version control systems like Git and Bitbucket and agile methodologies like Jira for collaborative software development and source control management.</li>
          <li>Collaborated across interdisciplinary teams to integrate new guidance and control algorithms effectively into vehicle systems.</li>
          <li>Analyzed and optimized GNC algorithms and simulations, resulting in improved accuracy and reliability of aerospace systems.</li>
          <li>Developed Python scripts for automated data analysis and solution modernization, significantly reducing analysis time by 50% and enhancing workflow efficiency.</li>
          <li>Contributed to the integration of new technologies and methodologies, supporting continuous improvement and innovation within the team.</li>
        </ul>
      </div>
      <div className="indented-section">
        <p className="indented"><b>Mass Properties Engineer</b></p>
        <p className="indented">01/2020 - 02/2022</p>
        <ul className="indented">
          <li>Collaborated with design, propulsion, electrical, dynamics, GNC, and aerospace engineers to model mass properties for launch vehicles.</li>
          <li>Used CAD, Critical Mass software, and drawings to create accurate mass models.</li>
          <li>Developed detailed assessments of mass, center of gravity, moment, and product of inertia at the piece part level.</li>
          <li>Facilitated effective communication and data exchange among cross-functional teams.</li>
      </ul>
      </div>
      {/* U.S. Army National Guard */}
      <p className="company"><b>U.S. Army National Guard, Arizona</b></p>
        <div className="indented-section">
        <p className="indented"><b>Specialist, 25Q-Multichannel Transmission Systems Operator and Maintainer</b></p>
        <p className="indented">Mar 2015 - Mar 2021</p>
        <ul className="indented">
          <li>Served as member of High Capacity Line of Sight (HCLOS) Team</li>
          <li>Coordinated inventory and Preventative Maintenance Checks and Services on intra-vehicular equipment</li>
          <li>Lead and provided tactical communications equipment training and exercises</li>
          <li>Installed and performed maintenance and inspections on: Satellite Communication Subsystems, Secure Anti-Jam Reliable Tactical Terminal, Antenna Systems and Radio Terminals, Various Electrical Equipment</li>
      </ul>
      </div>
    </section>
  );
}



function Skills() {
  return (
    <section className="section">
      <h2><i className="fas fa-cogs"></i> Skills</h2>
      <div className="skills">
        <span className="skill">Spacecraft Design</span>
        <span className="skill">AWS Certified Cloud Practitioner</span>
        <span className="skill">Avionics</span>
        <span className="skill">Systems Engineering</span>
        <span className="skill">Mission Analysis</span>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2><i className="fas fa-project-diagram"></i> Projects</h2>
      <div className="projects">
        <div className="project">
          <h3>Resume Page</h3>
          <g>  A professional, modern resume website built with React.js and automated using GitHub Actions for continuous deployment. This site dynamically showcases my work experience, skills, and projects in a sleek and user-friendly interface, all hosted seamlessly on GitHub Pages.</g>
          <a href="https://github.com/gpham-dev/resume-website" className="link-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>CosmicPath: A Planetary Motion Simulator</h3>
          <g>CosmicPath is a physics-driven planetary simulation utilizing real-world data from NASA’s HORIZONS API to model the motion of celestial bodies. It provides a visually immersive experience that accurately reflects gravitational forces, orbital paths, and planetary properties. Developed in Python, this project demonstrates my ability to integrate APIs, handle large datasets, and apply computational models to visualize complex space phenomena.</g>
          <a href="https://github.com/gpham-dev/CosmicPath" className="link-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );

}
function Education() {
  return (
    <section className="section">
      <h2><i className="fas fa-graduation-cap"></i> Education</h2>
      <p className="school"><b>Arizona State University</b></p>
      <p>B.S.E., Aerospace Engineering (Aeronautics)</p>
      <p>01/2016 - 12/2019</p>
      <p>Cum Laude, GPA: 3.49</p>

      <p className ="school"><b> Military Advanced Individual Training</b></p>
      <p>25Q - Multichannel Transmission Systems Operator and Maintainer</p>
      <p>Jul 2015 – Feb 2016</p>
      <p>Top of the Class Honors Graduate, GPA: 99.3/100</p>   
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section">
      <h2><i className="fas fa-address-book"></i> Contact</h2>
      <div className="contact-message">
      <p>Feel free to connect with me:</p>
      </div>
      <div className="contact-info">
        <a href="mailto:gierado.pham@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/mail-logo.png`} alt="Gmail" className="mail-logo" />
        </a>
        <a href="https://www.linkedin.com/in/gierado-pham/" target="_blank" rel="noopener noreferrer"> 
          <img src={`${process.env.PUBLIC_URL}/linkedin-logo.png`} alt="LinkedIn" className="social-logo" />
        </a>
      </div>
    </section>
  );
}

export default App;
