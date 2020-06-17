# UDP Listener

UDP Listener to Chrome APP pozwalająca na nasłuchiwanie i odczyt danych przesyłanych przez protokół UDP

## Instalacja

Aplikację uruchamiano w przegląrce Chromium (wersja 85.0.4171.0 testowana na Ubuntu 16.04) lub Chrome (Wersja 83.0.4103.97). Aby ją zainstalować należy przejść do [chrome://extensions/](chrome://extensions/) a kliknąć "Załaduj rozpakowane" i wybrać folder z aplikacją, który należy pobrać z repozytorium za pomocą:
> git clone https://github.com/kekusss/UDPListener.git

![](https://i.imgur.com/VCZnXKz.jpg)

Aplikacja powinna się pojawić w [chrome://apps/](chrome://apps/)

![](https://i.imgur.com/XwnfTTW.png)

## Działanie

Po uruchomieniu aplikacja inicjalizuje połączenie i wysyła pierwszy testowy pakiet UDP o treści "ALA MA KOTA". Jednocześnie uruchomione jest nasłuchiwanie dla wszystkich adresów na porcie **1234** (domyślnie, można to zmienić edytując zmienną PORT w pliku adapter.js). Po chwili pakiet zostaje odebrany i wyświetlony w oknie. Aby podejrzeć szczegóły działania należy uruchomić konsolę JS.

![](https://i.imgur.com/goKzJDl.png)

### Przykład: 

Strumień RTP wysyłany za pomocą VLC z "servera", który jest źródłem strumienia.
![](https://i.imgur.com/S2J5LH6.png)

Efekt w postaci odebranego pakietu RTP na urządzeniu klienta.
![](https://i.imgur.com/Lq6fGHI.png)
