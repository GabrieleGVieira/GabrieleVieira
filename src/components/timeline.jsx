import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Developer Junior Associate at Shopee Brasil{" "}
                          <span>2022-present</span>
                        </h2>
                        <p>
                          ◦ Be responsible for the daily agile development
                          ceremonies (Sprint Planning, Sprint Review, Sprint
                          Retrospective and Daily Meeting){" "}
                        </p>
                        <p>◦ CI/CD using GitLab</p>
                        <p>
                          ◦ Act on the refinement and prioritization of tasks
                        </p>
                        <p>
                          ◦ Acting in fronts of frontend and backend development
                          (Vue.js, React, Node.js, Python){" "}
                        </p>
                        <p>◦ Act on the correction of bugs </p>
                        <p> ◦ Perform tests</p>
                        <b>Main Achievement:</b>
                        <p>
                          ◦ Participate in the development and launch of a
                          project that transformed the manual process of product
                          validation and control into a integrated and automated
                          portal, discarding processes made by excel and
                          increasing the control of promotions, discounts and
                          massive masses of data, reducing errors and making the
                          process faster. The application consumes over 200k of
                          upload data per day and is used by more than 200
                          people in the product team.
                        </p>
                        <p>
                          <b>Skills: </b>
                          Use Case · Planning Poker · Kanban · Scrum · GitLab ·
                          Git · GitFlow · SQLAlchemy · Pytest · Python · FastAPI
                          · Vue.js · React · TypeScript · Docker · MongoDB ·
                          NoSQL · Microservices · PostgreSQL
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Scientific Initiation Scholarship at INPE{" "}
                          <span>2022-2023</span>
                        </h2>
                        <p>
                          <b>Project name:</b> "Forecasting and monitoring of
                          extreme weather events in Brazil using Artificial
                          Intelligence”.
                        </p>
                        <b>Objective:</b>
                        <p>
                          This project aims to implement a system of treatment
                          and analysis of large volumes of data, through Data
                          Science. For this, statistical methods applied to
                          meteorology will be usedfor quantification of
                          inconsistent data, statistical treatment for an
                          incomplete data series and calculation of metrics,in
                          order to assist the prediction and monitoring of
                          extreme weather events (deep drought and heavy rains).
                        </p>
                        <p>
                          <b>Skills: </b>
                          Python · Pandas · Sklearn · Keras · MatplotLib · R · netCDF
                          (Network Common Data Form) · GrADS (Grid Analysis and
                          Display System) · CDO (Climate Data Operators) · NCL
                          (NCAR Command Language)
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Intern in Geoprocessing and Quality of Information at
                          EDP Brasil <span>2021-2022</span>
                        </h2>
                        <p>
                          ◦ Participate in daily agile development ceremonies
                          (Daily Meeting)
                        </p>
                        <p>
                          ◦ Develop dashboards in PowerBI for data processing
                          and analysis
                        </p>
                        <p>◦ Create and maintain scripts in VBA</p>
                        <p>
                          ◦ Create and maintain scripts in pyspark and SQL for
                          data extraction and processing
                        </p>
                        <p>
                          ◦ Assist in the administration and governance of
                          Distributors' data
                        </p>
                        <p>
                          ◦ Support the monitoring of data processing and
                          systems of technical and commercial from distributors
                        </p>
                        <p>
                          ◦ Support in monitoring and supporting the demands and
                          projects of the area
                        </p>
                        <b>Main Achievement:</b>
                        <p>
                          ◦ I developed a script using pyspark and SQL that made
                          validations in the company’s database according to the
                          business rule. The script fed daily, automatically, a
                          powerBI that brought the numbers of incoscitent data
                          to be analyzed and corrected.Before these validations
                          were done manually, made by excel,and required more
                          time and many situations of inconsistency went
                          unnoticed, besides that now vision has become daily,
                          that is, as up to date as possible.
                        </p>
                        <p>
                          <b>Skills: </b>
                          Kanban · Scrum · PySpark · VBA (Visual Basic for
                          Applications) · Microsoft Power BI · SQL · Oracle ·
                          Azure Data Bricks
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
