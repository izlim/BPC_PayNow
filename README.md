## About this repo

This is a project to create a website that generates a QR code for PayNow/PayLah payments.

The website is created following the YouTube tutorial by [Traversy Media][1].

The QR Code is generated using [QRCode.js][2] by David Shim.
Modification has been made to the code as a REGEX bug prevented proper download of the generated image on Android devices.
The issue as well as the fix is found [here][4].

The PayNow string for the QR Code generation is created using the code from [ThunderQuote][3].

[1]: <https://www.youtube.com/watch?v=qNiUlml9MDk>
[2]: <https://davidshimjs.github.io/qrcodejs/>
[3]: <https://github.com/ThunderQuoteTeam/PaynowQR>
[4]: <https://github.com/davidshimjs/qrcodejs/issues/287>
