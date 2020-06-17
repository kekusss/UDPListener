// zainicjalizowanie okna otwieranego po uruchomieniu app
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('page.html', {
  	id: "mainWindow",
    innerBounds: {
      width: 600,
      height: 600
    }
  });
});
