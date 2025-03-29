
document.getElementById("cadastrar").addEventListener("click", function()
{
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const senha = document.getElementById("senha").value;
    const confirmation = document.getElementById("confirmation").value;
    const mensagemdiv = document.getElementById("mensagem");
        if(nome && numero && senha && confirmation)
        {
            if(senha === confirmation){
                mensagemdiv.textContent = "Cadastro realizado com sucesso"
            }
                mensagemdiv.style.color = "green";
        }
        else
        {
            mensagemdiv.textContent = "Por Favor, Preencha Todos os Campos!";
            mensagemdiv.style.color = "red";


        }
});

    for(let day = 1; day <= 31; day++) {
    document.write('<option value="'+day+'">'+day+'</option>');
    }
    const currentYear = new Date().getFullYear();
    for(let ano = currentYear; ano >= 1900; ano--) {
    document.write('<option value="'+ano+'">'+ano+'</option>');
    }