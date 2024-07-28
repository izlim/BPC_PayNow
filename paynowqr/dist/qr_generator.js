const PaynowQR = require('paynowqr');

//Create a PaynowQR object
let qrcode = new PaynowQR({
    uen:'T12SS0103L',           //Required: UEN of company
    amount : 50,               //Specify amount of money to pay.
    editable: false,             //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
    expiry: '20251231',         //Set an expiry date for the Paynow QR code (YYYYMMDD). If omitted, defaults to 5 years from current time.
    refNumber: 'Ch tithe',   //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
    company:  'Bethany Presbyterian'   //Company name to embed in the QR code. Optional.               
  });
  
  //Outputs the qrcode to a UTF-8 string format, which can be passed to a QR code generation script to generate the paynow QR
  let QRstring = qrcode.output();

  console.log(QRstring);