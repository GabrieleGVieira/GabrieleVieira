import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/crud-bg.jpeg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">CRUD - TYPESCRIPT</a>
                      </h3>
                      <span>
                        Develop a system of type CLI (command-line interface)
                        with the objective to meet the needs of the group World
                        Beauty (fictitious), of the area of aesthetics.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/GabrieleGVieira/crud-typescript"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-open" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/pi-3-bg.jpeg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">
                          Web Portal for Geoprocessing Satellite Images -
                          Integrator Project
                        </a>
                      </h3>
                      <span>
                        Development of a web portal with a map interface, based
                        on cloud computing services using tiles, which accesses
                        public satellite images and allows consultation,
                        manipulation and downloading of images to your user.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/grupo-3dsm/Sirius-repoP.I"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-open" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/pi-2-bg.jpeg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">
                          Web Portal for Statistical Analysis - Integrator
                          Project
                        </a>
                      </h3>
                      <span>
                        Develop a platform in which journalists from the
                        Vanguarda television network can access information and
                        voter data from different regions of the coverage area
                        in which the network works.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/grupo-3dsm/repo_pi"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-open" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/pi-1-bg.jpeg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">
                          Educational Courses Portal - Integrator Project
                        </a>
                      </h3>
                      <span>
                        Develop an e-commerce site in which students can access
                        quality didactic contents, fostering culture and adding
                        value to the customer according to business rules.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/arapujo/pi_primeiro_semestre"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-open" />
                          </a>
                        </span>
                      </p>
                    </div>
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
