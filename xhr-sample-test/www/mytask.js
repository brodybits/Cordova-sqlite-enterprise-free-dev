self.addEventListener('message', function(ev) {
  var r = new XMLHttpRequest();
  r.open("POST", "file:///aqaq#sq:open$123?" + encodeURIComponent(JSON.stringify([{name:"my.db"}])), true);
  r.send();
});
