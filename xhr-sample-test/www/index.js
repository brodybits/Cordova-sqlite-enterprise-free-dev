// NOTE: for some reason aqcallback needs to be in Javascript file, NOT in index.html:
function aqcallback(s) {
  //alert('got aqcallback with data: ' + s);
  if (s === 'a1') {
setTimeout(function() {
//alert('a1');
        var w = new Worker('mytask2.js');
//alert('a2');
        w.postMessage('go');
//alert('a3');
}, 0);
  } else {
    //alert('got aqcallback with data: ' + s);
    alert('got data: ' + decodeURIComponent(s));
  }
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

window.sqlitePlugin.openDatabase({name: 'dummy'}, function(success) {

        var w = new Worker('mytask.js');
        w.postMessage('go');

});

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
