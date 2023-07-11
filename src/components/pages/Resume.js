import React from "react";
import "../styles/style.css";
import Resume from "../../files/AllenTuazonResumeFSD.docx";

const styles = {
  spanStyle: {
    color: "#d5d5db",
    fontFamily: "Montserrat, sans-serif",
  },
  hrefStyle: {
    color: "#9898b3",
    fontFamily: "Montserrat, sans-serif",
    textDecoration: "none",
    fontWeight: "bolder",
  },
};

export default function Blog() {
  return (
    <div className="jumbotron text-center container-fluid">
      <h1 className="margin-bottom">Resume</h1>
      <div>
        <p>
          <span style={styles.spanStyle}>Programming Languages:</span>
          JavaScript
        </p>
        <p>
          <span style={styles.spanStyle}>Front-End Development:</span> HTML,
          CSS, Bootstrap, jQuery, React
        </p>
        <p>
          <span style={styles.spanStyle}>Back-End Development:</span> Node.js
        </p>
        <p>
          <span style={styles.spanStyle}>Databases:</span> MySQL, MongoDB
        </p>
        <p>
          <span style={styles.spanStyle}>Object-Relational Mapping(ORM):</span>
          Mongoose, Sequelize
        </p>
        <p>
          <span style={styles.spanStyle}>GraphQL:</span> ApolloDB
        </p>
        <p>
          <span style={styles.spanStyle}>Web Frameworks:</span> Express.js,
          React.js
        </p>
        <p>
          <span style={styles.spanStyle}>Version Control:</span> Git
        </p>
        <p>
          <span style={styles.spanStyle}>Agile Development:</span> Scrum, Kanban
        </p>
        <p>
          <span style={styles.spanStyle}>Deployment:</span> Heroku
        </p>
        <p>
          <span style={styles.spanStyle}>Testing:</span> Jest
        </p>
        <p>
          <span style={styles.spanStyle}>Project Management:</span> Jira, Trello
        </p>
        <p className="margin-bottom">
          <span style={styles.spanStyle}>Collaboration Tools:</span> Slack,
          GitHub
        </p>
      </div>
      <h2>
        Click{" "}
        <a style={styles.hrefStyle} href={Resume}>
          here
        </a>{" "}
        to download a copy of my resume.
      </h2>
    </div>
  );
}
