/* eslint-disable */
var exec = require('child_process').exec;
var open = require('open');

var dotnet = exec('ASPNETCORE_ENVIRONMENT=Development dotnet run', function (err, stdout) {
  if (err) throw err;
});

// printing server log
dotnet.stdout.on('data', function(data) {
  console.log(data);

  // hack to open browser when ready
  if(data.indexOf('Now listening on:') !== -1) {
    open('http://localhost:5000');
  }
});
