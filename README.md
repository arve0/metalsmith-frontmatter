# metalsmith-frontmatter

Sets front-matter of files to the global name `frontmatter`. For use with
[metalsmith-changed](https://github.com/arve0/metalsmith-changed). Lets one
access front-matter of files, even if they should not build.


Example:
```
var Metalsmith = require('metalsmith');
var frontmatter = require(metalsmith-frontmatter');
var changed = require('metalsmith-changed');

var metalsmith = Metalsmith(__dirname)
  .clean(false)
  .use(frontmatter)
  .use(changed())
  ... // more plugins
  .build(function(err){
    if (err) throw err;
  });
```

In your template:
```
<h1>Some header</h1>

<!-- YAML `title` property of 'path/to/file' -->
<h2>{{frontmatter['path/to/file.md'].title}}</h2>
```

**Note:** `contents`, `next` and `previous` properties are not saved to
`frontmatter[file]`.
