const light = document.getElementById("color");
const psw2 = document.getElementById("psw2")
const psw1 = document.getElementById("psw1");
const inputs = document.querySelectorAll("input");
const submit = document.getElementById("btn");
let darkmode = false;

init();
function init(){
    psw1.addEventListener("input", validatePass);
    psw2.addEventListener("input", validatePass);
    submit.addEventListener("click",verifyInputs);
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
    inputs.forEach((input)=>{
        input.addEventListener("input",()=>{
            if(input.validity.valid){
                input.style.borderColor = "lime";
            } else if (input.value.length == 0){
                input.style.borderColor = "#060";
            } else {
                input.style.borderColor = "red";
            }
        })
        input.addEventListener("keyup",(e)=>{
            if(e.key == "Enter"){
                verifyInputs();
            }
        })
    })
}

function validatePass() {
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

function verifyInputs(){
    let valid = true
    let errors = "";
    inputs.forEach((i)=>{
        if(!i.validity.valid){
            i.style.borderColor = "red";
            valid = false;
            errors += "\n" + i.name.toUpperCase();
        }
    })
    valid? alert("Success..."):alert("Invalid inputs in:"+errors);
}