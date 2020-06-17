//port to listening
var PORT = 1234;
// data to send
var myBuffer = str2ab();

var socketId;

/*
convert string to ArrayBuffer
*/
function str2ab(str = "ALA MA KOTA") {
    var buf=new ArrayBuffer(str.length);
    var bufView=new Uint8Array(buf);
    for (var i=0; i<str.length; i++) {
      bufView[i]=str.charCodeAt(i);
    }
    return buf;
  }

/*
convert ArrayBuffer to string
*/
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  };


// Handle the "onReceive" event.
var onReceive = function(info) {
  if (info.socketId !== socketId){
    console.log("something went wrong");
    return;
  }
  console.log("receive " + ab2str(info.data));
  console.log(info.data);
  
  document.getElementById("log").innerHTML += "\n" + ab2str(info.data);
};

// Create the Socket, using chrome API
chrome.sockets.udp.create({}, function(socketInfo) {
  socketId = socketInfo.socketId;
  // Setup event handler and bind socket.
  chrome.sockets.udp.onReceive.addListener(onReceive);
  chrome.sockets.udp.bind(socketId,
    "0.0.0.0", PORT, function(result) {
      if (result < 0) {
        console.log("Error binding socket.");
        return;
      }
      console.log("now I'm listening on " + PORT + " port");
      chrome.sockets.udp.send(socketId, myBuffer,
        '127.0.0.1', PORT, function(sendInfo) {
          console.log("sent " + sendInfo.bytesSent);
      });
  });
});


