import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
    const projects1 = [
      {
        title: "Chatbot Broadcasting Server",
        description: "Implemented an application over the chat server that provides all the users access and enables broadcasting by leading a team of 4 members. Devised a chat server using python and Transmission Control Protocol Sockets for 100% effective communication.",
        imgUrl: projImg1,
      },
      {
        title: "Student Admission Management System",
        description: "Designed a database management system with easy access to student application information was created with the use of ER and ORM diagrams replaced Automated the entry of personnel information with system using CouchBase and SQL Server, which reduced manual work by 5 hours per week.",
        imgUrl: projImg2,
      },
      {
        title: "On Road Vehicle Breakdown Assistance Finder",
        description: "Engineered an app that enables users to browse for a list of mechanics and gas stations nearby or at any location helped 80% of users when their vehicle's mechanical issues presented an unplanned hiccup using Android Studio, Java, and Google firebase as tools.",
        imgUrl: projImg3,
      }
    ];

    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                  <h2>Projects & Experience</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p>Job Role - Company Name, State, Country<br></br>  [Month Year - Month Year]</p>
                      <h5 style={{ color: 'white' }}>Roles & Responsibilities</h5>
                      <ul>
                        <li>Include 3-5 bullet points demonstrating skills you have gained through this position that relate back to the job description. Emphasize accomplishments over day-to-day tasks.</li>
                        <li>Place an action verb at the beginning of a bullet point statement to make the statement impactful.</li>
                        <li>Use quantifiers such as numbers, money amounts, or percentages whenever possible.</li>
                        <li>Emphasize key skills that employers may want to see in your resume</li>
                        <li>Highlight your results and impact by reflecting on the purpose behind the action/task.</li>
                      </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }