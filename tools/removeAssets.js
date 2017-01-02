/* eslint-disable */
var exec = require('child_process').exec;

function getPaths() {
  const context = './wwwroot';
  const folders = ['css', 'js'];
  const paths = folders.map(folder => {
    return `${context}/${folder}`;
  });

  return paths.join(' ');
}

var dotnet = exec(`rimraf ${getPaths()}`, function (err, stdout) {
  if (err) throw err;
});
