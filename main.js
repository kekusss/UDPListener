chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('page.html', { //echo_mco
  	id: "mainWindow", // mainWin
    innerBounds: {
      width: 600, //zmien
      height: 600  // zmien
    }
  });
});
