const fs = require('fs');
const hljs = require('highlight.js');
const markdownIt = require('markdown-it');


const md = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
      }
      catch (err) {}
    }
    return '<pre class="hljs"><code>' + markdownIt.utils.escapeHtml(str) + '</code></pre>';
  }
});


let mdStr = fs.readFileSync('C:\\Users\\Tower\\Desktop\\articles\\Dart\\dart.md', {encoding: 'utf8'});


fs.writeFile('./out.html', md.render(mdStr), {encoding: 'utf8'}, function (err) {
  console.log(err);
});
