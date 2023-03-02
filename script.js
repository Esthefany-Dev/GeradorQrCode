const input = document.querySelector(".inputDigiteAqui");
const qrCode = document.querySelector(".qrCode");

document.addEventListener("keyup", (e)=>{
    if(e.key) QRCodeGenerator();
});

function QRCodeGenerator(){
    if(input.value <= 0){
        qrCode.style.display="none";
    }else{
        qrCode.style.display="block";
        qrCode.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    }
}