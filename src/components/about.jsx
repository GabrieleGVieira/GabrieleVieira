import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a passionate Software Engineer, specializing as a
                        Full Stack Developer. I love learning new things and go
                        through new challenges.
                      </p>
                      <p>
                        I have work experience with Projects, Software
                        Engineering, Product Development and Agile Project
                        Management.
                      </p>
                      <p>
                        I belive that innovation isn't necessarily creating
                        something new and from scratch. If we facilitate the
                        life of at least one person this will already be
                        innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Front-End Development </h3>
                    <p>
                      Work experience with front-end technologies like
                      Javascript/Typescript, Vue.js, React, Node.js,
                      Styled-component, and more...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Back-End Development</h3>
                    <p>
                      Work experience with front-end technologies like Python,
                      CI/CD, FastAPI, Docker, MongoDB, NoSQL, Microservices,
                      PostgreSQL, and more...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3> Agile Project Management</h3>
                    <p>
                      Work experience with Agile Development Ceremonies, Scrum,
                      Kanban, Use Case, Planning Poker, GitFlow, JIRA,
                      Confluence, and more...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
