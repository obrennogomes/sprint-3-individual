function cadastrar() {
    var nomeVar = nome_input.value;
    var cpfVar = cpf_input.value;
    var telVar = tel_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = senha_confirmacao_input.value

    if (nomeVar == "" || cpfVar == "" || telVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        avisomsg.innerHTML = "Preencha todos os campos para prosseguir!";
    }
    else {
        if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
            avisomsg.innerHTML = "Ops, e-mail inválido! Verifique e tente novamente.";
        } else {
            if (senhaVar == confirmacaoSenhaVar) {
                avisomsg.innerHTML = `USUARIO CADASTRADO`
            }
            else {
                avisomsg.innerHTML = `As senhas inseridas devem ser iguais para prosseguir!`
            }
        }
    }
}