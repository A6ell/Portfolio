import React, { useState, useEffect } from 'react';
import './SkillsSlideshow.css'; // Import CSS for styling

const SkillsSlideshow = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = [
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React.js', icon: 'react' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Flask', icon: 'flask' },
    { name: 'Node.js', icon: 'node' },
    { name: 'MySQL', icon: 'mysql' }
  ];

  // Function to handle skill click
  const handleSkillClick = (index) => {
    setCurrentSkillIndex(index);
  };

  // Function to cycle through skills automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change skill every 3 seconds
    return () => clearInterval(interval);
  }, [skills.length]); // Re-run effect when skills array changes

  // Calculate the number of rows and columns
  const numRows = 4;
  const numCols = Math.ceil(skills.length / numRows);

  // Generate the grid layout for skills
  const skillGrid = [];
  for (let row = 0; row < numRows; row++) {
    const rowItems = [];
    for (let col = 0; col < numCols; col++) {
      const index = row * numCols + col;
      if (index < skills.length) {
        const skill = skills[index];
        rowItems.push(
          <div
            key={index}
            className={`skill ${index === currentSkillIndex ? 'active' : ''}`}
            onClick={() => handleSkillClick(index)}
          >
            <img
              src={`https://img.shields.io/badge/${skill.name}-E34F26?style=for-the-badge&logo=${skill.icon}&logoColor=white`}
              alt={skill.name}
            />
          </div>
        );
      }
    }
    skillGrid.push(
      <div key={row} className="skill-row">
        {rowItems}
      </div>
    );
  }

  return (
    <div className="skills-slideshow-container">
      <h2 className="slideshow-heading"></h2>
      <div className="skills-slideshow">{skillGrid}</div>
    </div>
  );
};

export default SkillsSlideshow;
