// port na którym nasłuchujemy
var PORT = 1234;
// dane do wysłania
var myBuffer = str2ab();

var socketId;

/*
Konwersja stringa na ArrayBuffer - w celu przesłania przez UDP
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
Konwersja ArrayBuffer na stringa w celu wyświetlenia przesłanych danych w oknie HTML
*/
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  };

// wywoływana przez event "onReceive" - obsługa odebranych pakietów UDP
var onReceive = function(info) {
  if (info.socketId !== socketId){
    console.log("something went wrong");
    return;
  }
  // szczegółowe dane przekazywane do konsoli (obiekty)
  console.log("receive " + ab2str(info.data));
  console.log(info.data);
  
  // wypisanie zawartości pakietów w oknie aplikacji, po kowersji z ArrayBuffer do stringów, każdy pakiet w nowej linii
  document.getElementById("log").innerHTML += "\n" + ab2str(info.data);
};

// Utworzenie Socketu z użyciem chrome.sockets.udp API
chrome.sockets.udp.create({}, function(socketInfo) {
  socketId = socketInfo.socketId;
  // ustawienie wywołania funkcji onReceive gdy zostaną odebrane pakiety
  chrome.sockets.udp.onReceive.addListener(onReceive);
  // bindowanie socketu, ustawienie adresu i portu nasłuchiwania, 0.0.0.0 oznacza, że nasłuchuje z wszystkich adresów
  chrome.sockets.udp.bind(socketId,
    "0.0.0.0", PORT, function(result) {
      if (result < 0) {
        console.log("Error binding socket.");
        return;
      }
      console.log("now I'm listening on " + PORT + " port");

      // wyslanie pierwszego testowego pakietu o treści "ALA MA KOTA"
      chrome.sockets.udp.send(socketId, myBuffer,
        '127.0.0.1', PORT, function(sendInfo) {
          console.log("sent " + sendInfo.bytesSent);
      });
  });
});
