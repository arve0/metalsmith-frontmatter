
module.exports = function plugin(){

  return function setFrontMatterGlobal(files, metalsmith, done){
    setImmediate(done);

    metalsmith.metadata().frontmatter = {};

    Object.keys(files).forEach(function(file){
      metalsmith.metadata().frontmatter[file] = {};
      Object.keys(files[file]).forEach(function(key){
        if (['contents', 'next', 'previous'].indexOf(key) !== -1) {
          // do set contents, next and previous properties
          return;
        } else {
          metalsmith.metadata().frontmatter[file][key] = files[file][key];
        }
      });
    });
  } 
}
