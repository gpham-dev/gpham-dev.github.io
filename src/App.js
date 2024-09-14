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
      <p>Northrop Grumman </p>
      <p>Guidance, Navigation, and Control Engineer</p>
      <p>02/2022 - Present</p>
      <p>Worked on various aerospace projects, including spacecraft design and mission planning, with a focus on advanced technology integration and system performance evaluation.
quality and standards.
● Implemented automated testing frameworks, resulting in a 30% reduction in error rates.
● Familiarity with version control systems like Git and Bitbucket and agile methodologies like Jira for
collaborative software development and source control management.
● Collaborated across interdisciplinary teams to integrate new guidance and control algorithms effectively into
vehicle systems.
● Analyzed and optimized GNC algorithms and simulations, resulting in improved accuracy and reliability of
aerospace systems.
● Developed Python scripts for automated data analysis and solution modernization, significantly reducing
analysis time by 50% and enhancing workflow efficiency.
● Contributed to the integration of new technologies and methodologies, supporting continuous improvement
and innovation within the team.
Mass Properties Engineer 01/2020 - 02/2022
● Collaborated with design, propulsion, electrical, dynamics, GNC, and aerospace engineers to model mass properties for launch vehicles.
● Used CAD, Critical Mass software, and drawings to create accurate mass models.
● Developed detailed assessments of mass, center of gravity, moment, and product of inertia at the piece part
level.
● Facilitated effective communication and data exchange among cross-functional teams.
U.S. Army National Guard, Arizona Mar 2015 - Mar 2021 Senior Specialist, 25Q-Multichannel Transmission Systems Operator and Maintainer
• ServedasmemberofHighCapacityLineofSight(HCLOS)Team
• CoordinatedinventoryandPreventativeMaintenanceChecksandServicesonintra-vehicularequipment
• Leadandprovidedtacticalcommunicationsequipmenttrainingandexercises
• Installedandperformedmaintenanceandinspectionson:SatelliteCommunicationSubsystems,Secure Anti-Jam Reliable Tactical Terminal, Antenna Systems and Radio Terminals, Various Electrical Equipment</p>
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
          <h3>Project Title 1</h3>
          <p>Description of your project, including technologies used and any notable achievements.</p>
          <a href="https://github.com/yourusername/project1" className="link-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project Title 2</h3>
          <p>Description of another project, highlighting key details and contributions.</p>
          <a href="https://github.com/yourusername/project2" className="link-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
      <p>B.S.E., Aerospace Engineering (Aeronautics)
          Arizona State University, Tempe, AZ
          Military Advanced Individual Training
          25Q - Multichannel Transmission Systems Operator and Maintainer Top of the Class, Honors Graduate
          EXPERIENCE
          Northrop Grumman
          Graduating Dec 2019 GPA: 3.49
          Jul 2015 – Feb 2016 GPA: 99.3/100
          </p>
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
        <a href="https://www.linkedin.com/in/your-profile-link" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/linkedin-logo.png`} alt="LinkedIn" className="social-logo" />
        </a>
      </div>
    </section>
  );
}

export default App;
