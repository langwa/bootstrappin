var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    node;

gulp.task('server', function() {
  if (node) node.kill();
  node = spawn('node', ['server.js'], {stdio: 'inherit'});
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('watch', ['server'], function() {
  gulp.watch('public/**/*.*', ['server']); 
});
