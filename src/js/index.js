/*window.alert("oi") sempre que quiser informar algo ao usuário*/
/*o que o codigo vai fazer?  */
//deixar em comentario e trabalhar em torno disso 
/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao'); //nesse ponto se gera uma lista de todos os itens do teu html
//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
const proposta = document.querySelectorAll(".proposta");
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
  //nesse ponto se gera uma lista de todos os itens do teu html
    //como não tem algum lugar de click ou seleção para o fundo é preciso referenciar usando um array ou vetor gerando uma lista com referencia nos botões que estou trabalhando que será criado em ordem
botoes.forEach((botao,indice )=> { //pode usar em vez de indice, i , index
//adicionado dois quesitos de seleção com click- tanto o quesito botao quanto quesito lista de indices 
  botao.addEventListener("click", () =>{
  const botaoSelecionado = desselecionarBotao(); //atribuida uma função para melhorar o codigo
botaoSelecionado.classList.remove("selecionado") // remover a classificação de item selecionado
  })
  //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
  //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou (interação com user)
  botao.addEventListener("click", () => {   
  //console.log("clicou no botao",botao); exibe o botão
  //console.log(botao.classList); //exibe a classe do botao que foi clicado
    botao.classList.add("selecionado");
   // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    desselecionarPersonagem();
    //atribui a uma classe outra atribuição, no caso atribuindo a opção selecionado.
    //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    proposta[indice].classList.add("selecionado");
  });
});
function desselecionarPersonagem() {
  const propostaSelecionado = document.querySelector(".proposta.selecionado");
  propostaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  console.log(botaoSelecionado);
  return botaoSelecionado;
}
