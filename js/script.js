const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const name = document.getElementById('name').value;
    const offering = document.getElementById('offering').value;
    const missions = document.getElementById('missions').value;
    const building = document.getElementById('building').value;
    const tithe = document.getElementById('tithe').value;
    var radios = document.getElementsByName("svc");
    var service = Array.from(radios).find(radio => radio.checked).value;  
    const sum = (parseFloat(offering) + parseFloat(missions) + parseFloat(building) + parseFloat(tithe)).toFixed(2);
    let reference = service + ' ' + name;

    if (offering > 0) {
        reference += (' o:' + offering);
    }
    if (missions > 0) {
        reference = reference + ' m:' + missions;
    }
    if (building > 0) {
        reference = reference + ' b:' + building;
    }
    if (tithe > 0) {
        reference = reference + ' t:' + tithe;
    }

    const payNowString = new PaynowQR({
        uen:'T12SS0103L',           //Required: UEN of company
        amount : sum,               //Specify amount of money to pay.
        editable: false,             //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
        refNumber: reference,   //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.              
      });
    
    setTimeout(() => {
        generateQRCode(payNowString.output());
        //new QRCode(document.getElementById("qrcode"), payNowString.output());

        setTimeout(() => {
            const saveUrl = qr.querySelector("img").src;
            //alert(document.getElementById('qrcode').src);
            createSaveBtn(saveUrl);
        }, 1000);

    }, 50);

}

const generateQRCode = (url) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: 300,
        height: 300,
    });
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    alert(saveUrl);
    link.classList = 'bg-red-500 hover:bg-red-700  text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
};

const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) saveBtn.remove();
}

form.addEventListener('submit', onGenerateSubmit);