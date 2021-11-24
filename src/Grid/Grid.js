import React from 'react'
import styles from './Grid.module.css';
import 'animate.css';

function Grid () {

 // const myLearnings
  
  return (

    <div className={styles.container}>
        <div className={styles.blocks}>
          <h2>Current Professional Life</h2>
          <h3>LEAP Apprenticeship</h3>
          <h6>July 2021 - Present</h6>
          <section>The Microsoft LEAP apprenticeship is a program which seeks out unconvential talent sources, then trains candidates up for certain career paths. I have been fortunate enough to be selected to become a software engineer "Leaper". In addition to my regular job responsibilities, I am also learning new material at a rapid rate. Check out my completed learning modules to the right of the page.</section>
          <h3>Senior Data Center Technician at Microsoft</h3>
          <h6>October 2017 - Present</h6>
          <section>Currently facilitating growth in the Microsoft Cloud by managing and prioritizing ticketing queues, deployment projects and vendor coordination based on current resources and SLA requirements. As a senior team member, I am responsible for delegating tasks to my team, tracking progress and changing assignments throughout the day as demands change.</section>
        </div>
        <div className={styles.blocks}>
          <h2>Previous Learnings</h2>
          <section><em>Git </em>- Source code management</section>
          <section><em>HTML and CSS </em></section>
          <section><em>C# </em>- Basics of C# concepts and Object Oriented Programming</section>
          <section><em>Web APIs </em></section>
          <section><em>Javascript </em></section>
          <h2>Currently Learning</h2>
          <section><em>Reactjs </em></section>
        </div>
        <div className={styles.blocks}>
          <h2>Find me on Github</h2>
          <section><em>Main page </em><a href="https://github.com/antwon-smith">Github profile</a></section>
          <h2>Check out some of my previous projects</h2>
          <section><em>C# Console Calculator - </em><a href="https://github.com/antwon-smith/CalculatorApp">Project repository</a></section>
          <section><em>C# Console Hangman - </em><a href="https://github.com/antwon-smith/Hangman">Project repository</a></section>
          <section><em>C# Console Reflex Game - </em><a href="https://github.com/antwon-smith/ReflexTester">Project repository</a></section>
          <section><em>HTML/JavaScript Calculator - </em><a href="https://github.com/antwon-smith/calculator">Project repository</a></section>
          <h2>Follow me on LinkedIn</h2>
          <section><a href="https://www.linkedin.com/in/leamon-a-smith/">LinkedIn Profile</a></section>
        </div>

      {/* <div className={styles.item}>1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div> */}
    </div>
  )
}

export default Grid;
