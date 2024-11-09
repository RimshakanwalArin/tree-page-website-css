import React from 'react';
import styles from './about.module.css'; // Custom CSS module

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Rimsha Kanwal</h1>
          <p className={styles.subtitle}>Web Developer</p>
          <p className={styles.subtitle}>arinrimshakanwal@gmail.com</p>
        </div>
        <div className={styles.section}>
          <div>
            <h2 className={styles.sectionTitle}>Professional Summary</h2>
            <p className={styles.sectionText}>
              A passionate Web Developer with over 2 years of experience in building and maintaining responsive websites using Python and Django. Skilled in creating dynamic web applications, implementing RESTful APIs, and integrating third-party services. Proficient in both front-end and back-end development, with a keen eye for detail and a commitment to delivering high-quality solutions.
            </p>
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <ul className={styles.list}>
              <li>
                <strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
