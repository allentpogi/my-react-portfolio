import React from "react";
import "../styles/style.css";
import Resume from "../../files/AllenTuazonResumeFSD.pdf";

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
  const skills = [
    {
      label: "Programming Languages:",
      values: ["JavaScript"],
    },
    {
      label: "Front-End Development:",
      values: ["HTML", "CSS", "Bootstrap", "jQuery", "React"],
    },
    {
      label: "Back-End Development:",
      values: ["Node.js"],
    },
    {
      label: "Databases:",
      values: ["MySQL", "MongoDB"],
    },
    {
      label: "Object-Relational Mapping(ORM):",
      values: ["Mongoose", "Sequelize"],
    },
    {
      label: "GraphQL:",
      values: ["ApolloDB"],
    },
    {
      label: "Web Frameworks:",
      values: ["Express.js", "React.js"],
    },
    {
      label: "Version Control:",
      values: ["Git"],
    },
    {
      label: "Agile Development:",
      values: ["Scrum", "Kanban"],
    },
    {
      label: "Deployment:",
      values: ["Heroku"],
    },
    {
      label: "Testing:",
      values: ["Jest"],
    },
    {
      label: "Project Management:",
      values: ["Jira", "Trello"],
    },
    {
      label: "Collaboration Tools:",
      values: ["Slack", "GitHub"],
    },
  ];

  return (
    <div className="jumbotron text-center container-fluid">
      <h1 className="margin-bottom">Resume</h1>
      <div>
        {skills.map((skill, i) => (
          <p
            key={skill.label}
            className={skill.values.length > 1 ? "margin-bottom" : ""}
          >
            <span style={styles.spanStyle}>{skill.label}</span>{" "}
            {skill.values.join(", ")}
          </p>
        ))}
      </div>
      <h2>
        Click{" "}
        <a style={styles.hrefStyle} target="_blank" href={Resume}>
          here
        </a>{" "}
        to download a copy of my resume.
      </h2>
    </div>
  );
}
