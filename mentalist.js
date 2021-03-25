  // NUMERO ALEATORIO PARA SER ADIVINHADO
  var numeroSecreto = parseInt(Math.random()* 11);

  // NUMERO DE TENTIVAS PARA ACERTAR O NUMERO SECRETO
  var tentativas = 3
  
  // CAPTURANDO O ELEMENTO <h2> QUE EXIBIRA A MENSAGEM
  var mensagem = document.querySelector('.mensagem'); // <h2>

  // CAPTURANDO O ELEMENTO <button> RESTART
  var jogarNovamente = document.querySelector(".jogarNovamente");
  var errou = document.querySelector(".errou");

  
  // CAPTURANDO O ELEMENTO <button> 
  var meuBotao = document.querySelector(".botao"); // <button>

  // ASSOCIANDO UM ESCUTADOR DE EVENTO AO BOTÃO. QUEREMOS OUVIR QUANDO UM CLIQUE ACONTECER SOBRE ELE.
  meuBotao.addEventListener("click", function() {
  
    // CAPTURANDO O ELEMENTO <input>. ESSE É O CAMPO DO QUE RECEBE O NUMERO DIGITADO PELO O USUARIO.
    let input = document.querySelector("#chute");
  
    // OBTENDO O VALOR CONTIDO NO ELEMENTO <input>
    input = input.value;
  
    // CHAMANDO A FUNÇÃO chutar() PASSANDO O VALOR DO ELEMENTO INPUT COMO ARGUMENTO. POR EXEMPLO, SE O VALOR FOR 24: chuta(input) --- > chutar(24)
    chutar(input);
  });
    function chutar(numeroChutado) { 
      if (numeroChutado == "") {
          mensagem.innerHTML = 'Digite um número válido!';
      } else {
      if (numeroChutado == numeroSecreto) {
         mensagem.innerHTML = 'Parabéns! Você acertou!'; jogarNovamente.addEventListener('click', function() {
         location.reload();
         })

       }else if(numeroChutado > numeroSecreto) {
        tentativas = tentativas - 1
         mensagem.innerHTML = 'O número secreto é menor... Restam ' +  tentativas  + " tentativas"; window.onload = function errou() {
         document.getElementById(".errou").src = "https://media1.giphy.com/media/83vBarohXpmmc/200w.webp?cid=ecf05e47jsvdj869dj20355czr75bxm2y62ub17cfskcbolz&rid=200w.webp";
        }
       } else if(numeroChutado < numeroSecreto) {
        tentativas = tentativas - 1
         mensagem.innerHTML = 'Número secreto é maior... Restam ' +  tentativas  + " tentativas";
       }  
       if (tentativas <= 0) {
         mensagem.innerHTML = 'Não foi dessa vez, tente novamente!'; jogarNovamente.addEventListener('click', function() {
         location.reload();
         })
        
    }} }