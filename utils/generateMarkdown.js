// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  
  
  Description
  ${data.description} 
  
  
  Installation
  ${data.installation}
  
  Usage
  ${data.usage} 
  
  Contributing
  ${data.contributing} 
  
  Testing
  ${data.testing}  

  License
  ${data.license}
  
  
  Questions

  If you have any questions please feel free to contact me on github or via email.
  
  Github:${data.github}

  Email:${data.email}
`;
}

module.exports = generateMarkdown;
