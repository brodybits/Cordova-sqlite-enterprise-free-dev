self.addEventListener('message', function(ev) {
  var r = new XMLHttpRequest();
  //r.open("POST", "file:///aqaq#sq:opqr$123?" + encodeURIComponent(JSON.stringify([{name:"my.db"}])), true);
  //r.open("POST", "file:///aqaq#sq:backgroundExecuteSqlBatch$123?" + encodeURIComponent(JSON.stringify([{
  //  name:"my.db"}])), true);
  // XXX TODO: fix response mechanism to handle "'" and other chars:
  //r.open("POST", "file:///aqaq#sq:backgroundExecuteSqlBatch$123?" + encodeURIComponent(JSON.stringify([{
  //  dbargs:{dbname:"my.db"}, flen: 1, flatlist: ["SELECT UPPER('MyText') AS u1", 0] }])), true);
  r.open("POST", "file:///aqaq#sq:backgroundExecuteSqlBatch$123?" + encodeURIComponent(JSON.stringify([{
    dbargs:{dbname:"my.db"}, flen: 1, flatlist: ["SELECT UPPER('MyText')", 0] }])), true);
  r.send();
});
