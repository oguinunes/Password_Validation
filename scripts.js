const passwordInput = document.querySelector ("#passwordInput")

passwordInput.addEventListener('input', function (){

    const password = this.value //getting user password

    //down here getting elements
    const strengthIndcator = document.querySelector("#password-strength-indicator")

    const strengthText = document.querySelector("#password-strength-text")

    const strengths ={
        0: "Muito Fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte"
    }

    let score = 0

    //requirements
    if(password.length >= 8) score++
    if(password.match(/[a-z]/))score++
    if(password.match(/[A-Z]/))score++
    if(password.match(/[0-9]/))score++
    if(password.match(/[^a-z-A-Z-0-9]/))score++

    //calc %, cause de width wiil be in %
    const width = (score/4) * 100

    strengthIndcator.style.width = `${width}%`//color the % 

switch(score) {
    case 1:
        strengthIndcator.style.backgroundcolor = "#EE3838"
        break
    case 2:
       strengthIndcator.style.backgroundColor = "#FFB74D"
        break
    case 3:
        strengthIndcator.style.backgroundColor = "#FFF176"
        break
    case 4:
        strengthIndcator.style.backgroundColor = "#81C784"
        break
    default:
        strengthIndcator.style.backgroundcolor = "transparent"
        break
}

    if(password.length > 0 ?? score> 4){
       strengthText.innerHTML = `Senha ${strengths[score]}`
    }else{
        strengthText.innerHTML = ""
    }
})

function showPass(){
    const passwordInput = document.getElementById("passwordInput")
    const btnShow = document.getElementById('btn-pass')

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text' //turn text so I can see it
        btnShow.classList.replace('bi-eye-fill', ('bi-eye-slash-fill'))
    } else{
        passwordInput.type = "password"
        btnShow.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}


