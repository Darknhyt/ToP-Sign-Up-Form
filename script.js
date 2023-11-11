const light = document.getElementById("color");
const psw2 = document.getElementById("psw2")
const psw1 = document.getElementById("psw1");
const inputs = document.querySelectorAll("input");
let darkmode = false;

init();
function init(){
    psw1.addEventListener("input", validate);
    psw2.addEventListener("input", validate);
    light.addEventListener("click", () => {
        if (darkmode) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#FFF";
            darkmode = false;
        } else {
            document.body.style.backgroundColor = "#FFF";
            document.body.style.color = "#000";
            darkmode = true;
        }
    });
    console.log(inputs);
    inputs.forEach((input)=>{
        input.addEventListener("input",()=>{
            if(input.validity.valid){
                input.style.borderColor = "lime";
            }else{
                input.style.borderColor = "red";
            }
        })
    })
       
    
}

function validate() {
    if (psw1.value.length > 7 && psw2.value.length > 7) {
        if (psw1.value == psw2.value) {
            psw1.style.borderColor = "lime";
            psw2.style.borderColor = "lime";
        } else {
            psw1.style.borderColor = "red";
            psw2.style.borderColor = "red";
        }
    }
}