function teste1(){
    const nome = document.getElementById("inputNomeID")
    const telefone = document.getElementById("telefoneID")
    const email = document.getElementById("emailID")
    const empresa = document.getElementById("empresaID")
    const menssagem = document.getElementById("msgID")
    const checkBoxTerm = document.getElementById('termosID')
    var validadorStatus = "ok"
    var tempMail = email.value
    var regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
/**RESET error COLLOR */
    telefone.style.border = '';
    nome.style.border = '';
    empresa.style.border = '';
/** */

/* VALIDANDO EMAIL REGEX*/
    if(regexMail.test(tempMail)){
        email.style.border = '';
    }
    else{
        tempMail="404"
    }
/** */

/* VALIDANDO CAMPOS*/
    if (nome.value.length <3){
        alert("Preencha o nome corretamente para proceguir!")
        nome.style.border = '2px solid #e63636';
        validadorStatus = "false"
    }
    if (validadorStatus == "ok"){
        if (telefone.value.length <8){
            alert("Preencha o telefone corretamente para proceguir!")
            telefone.style.border = '2px solid #e63636';
            validadorStatus = "false"
        }
    }   
    if (validadorStatus == "ok"){
        if ((tempMail.length <5) || (tempMail.indexOf("@") == -1)){
            alert("Preencha com um email válido para proceguir!")
            email.style.border = '2px solid #e63636';
            validadorStatus = "false"
        }
    }
    if (validadorStatus == "ok"){
        if (empresa.value.length <3){
            alert("Preencha o nome da empresa corretamente para proceguir!")
            empresa.style.border = '2px solid #e63636';
            validadorStatus = "false"
        }
    }
    if (validadorStatus == "ok"){
       if (checkBoxTerm.checked != true){ 
        alert("Aceite os termos de serviço para proceguir!")
        validadorStatus = "false"
        }  
    }
/** ¨\__(º__º)__/¨ */

/** MONTAGEM E DOWNLOAD DO JSON*/
    if (validadorStatus == "ok"){
        const jsonOutput = '{"dados":['+'{"Nome":"'+nome.value+'"},'+'{"telefone":"'+telefone.value+'"},'+'{"email":"'+email.value+'"},'+'{"empresa":"'+empresa.value+'"},'+'{"menssagem":"'+menssagem.value+'"}]}'
        let blob = new Blob([jsonOutput],
            {
                type:"text/plain;charset=utf-8"
            });
        saveAs(blob,nome.value+".json");
    }
/**¨\__(º__º)__/¨ */
}