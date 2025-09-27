let inputId = document.getElementById('inputId');
let inputPassword = document.getElementById('inputPassword');
let btn = document.getElementById('btn');
let Eye = document.getElementById('Eye');

function checkInput() {
    if (inputId.value.trim() && inputPassword.value.trim()) {
        btn.disabled = false;
        btn.classList.remove("bg-[#F69E86]", "cursor-not-allowed");
        btn.classList.add("bg-[#F59A86]", "hover:bg-[#F69E86]", "cursor-pointer");
        
    } else {
        btn.disabled = true;
        btn.classList.remove("bg-green-500", "hover:bg-green-600", "cursor-pointer");
        btn.classList.add("bg-[#F69E86]", "cursor-not-allowed");
    }
}

inputId.addEventListener('input', checkInput);
inputPassword.addEventListener('input', checkInput);

Eye.addEventListener('click', () => {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
});


btn.addEventListener('click', ()=>{
    window.location.href = 'page.html'
})
