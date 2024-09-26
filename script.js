const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generate');
const downloadbtn = document.getElementById('download');
const qrContainer = document.querySelector('.qr-body');


let size = sizes.value; // taken value from size option 


// button for Gentating QR code
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();    // help to stop your page
    if(qrText.value.length > 0){ // if text filed is empty  then give alert message
        generateQRCode();
    }
   else{
    alert("Enter the text or Url")
   }


});

// for size takeing from ui
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});


function isEmptyInput(){
//     if(qrText.value.length > 0){ // if text filed is empty  then give alert message
//         generateQRCode();
//     }
//    else{
//     alert("Enter the text or Url")
//    }

   qrText.value.length > 0 ? generateQRCode():alert("Enter the text or Url")

}



// for genrating QR code
function generateQRCode(){
    qrContainer.innerHTML ="";  // for clean up prevoius QR code
    new QRCode(qrContainer,{
        text:qrText.value,
        height: size,
        width: size,
        colorLight:"#fff",
        colorDark :"#000",
    });
}

downloadbtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img != null){
        let imgAtrr = img.getAttribute('src')
        downloadbtn.setAttribute("href", imgAtrr)
    }else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)

    }
    
})