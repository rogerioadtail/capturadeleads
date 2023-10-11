function teste1(){
    const nome = document.getElementById("inputNomeID")
    const telefone = document.getElementById("telefoneID")
    const email = document.getElementById("emailID")
    const empresa = document.getElementById("empresaID")
    const menssagem = document.getElementById("msgID")
    const checkBoxTerm = document.getElementById('termosID')
    var validadorStatus = "ok"

/* VALIDANDO CAMPOS EM BRANCO*/
    if (nome.value.length <3){
        alert("Preencha o nome corretamente para proceguir!")
        validadorStatus = "false"
    }
    if (validadorStatus == "ok"){
        if (telefone.value.length <8){
            alert("Preencha o telefone corretamente para proceguir!")
            validadorStatus = "false"
        }
    }   
    if (validadorStatus == "ok"){
        if ((email.value.length <5) && (email.value = "")){
            alert("Preencha o email corretamente para proceguir!")
            validadorStatus = "false"
        }
    }
    if (validadorStatus == "ok"){
        if (empresa.value.length <3){
            alert("Preencha o nome da empresa corretamente para proceguir!")
            validadorStatus = "false"
        }
    }
    if (validadorStatus == "ok"){
       if (checkBoxTerm.checked != true){ 
        alert("Aceite os termos de serviço para proceguir!"+nome.length)
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
