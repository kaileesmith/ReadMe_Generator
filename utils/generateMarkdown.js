// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.description} ${data.installation} ${data.usage} ${data.contributing} ${data.testing}  ${data.github} ${data.email}
`;
}

module.exports = generateMarkdown;
