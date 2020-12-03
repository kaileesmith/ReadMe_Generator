// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${data.description} ${data.installation} ${data.usage} ${data.contributing} ${data.testing}
`;
}

module.exports = generateMarkdown;
