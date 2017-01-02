/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 6.9) {
    throw new Error('Linkr requires node 6.9 or greater.');
  }
});
