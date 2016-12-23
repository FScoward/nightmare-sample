var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

var qiita_popular_item = 'http://qiita.com/popular-items';

nightmare
  .goto(qiita_popular_item)
  .evaluate(function(){
      return Array.from(document.querySelectorAll(".popularItem_articleTitle_text"),  e => {return e.href;})
    })
  .end()
  .then(function (result) {
    console.log('result', result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
