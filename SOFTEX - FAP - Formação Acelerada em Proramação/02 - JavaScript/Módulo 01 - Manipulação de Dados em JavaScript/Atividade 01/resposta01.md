# Atividade

Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web.

Com o código fonte aberto você deve:

- Verificar no código algum elemento que utilize JavaScript;

- Marcar alguns elementos do site;

- Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a
finalidade do botão.

## Resposta

### Site 01

<https://www.vitgbrasil.com.br/vedi/?lang=pt>

![texto](./Site%2001.png)

- O site Selecionado foi o portal de agendamento da Drogaria Araújo.

- A tag escolhida:

``` html
<script language="JavaScript" src="scripts/checkEnter.js"></script>
```

- A função checkEnter foi rojetada para ser usada em um contexto onde você deseja verificar se a tecla "Enter" (também conhecida como tecla de retorno) foi pressionada. O objetivo principal dessa função é permitir que um botão seja clicado automaticamente quando a tecla "Enter" do teclado for pressionada, em vez de fazer com que o usuário clique fisicamente no botão usando o mouse.

- Segue código abaixo:

``` javascript
function checkEnter(e, button){
 var characterCode
  if(e && e.which){ //if which property of event object is supported (Netscape)
   e = e
   characterCode = e.which //character code is contained in Netscape's which property
  }
  else {
   e = event
   characterCode = e.keyCode //character code is contained in IE's keyCode property
  }
  if(characterCode == 13){      //if generated character code is equal to ascii 13 (if enter key)
   button.click();
   // document.fPOs.bfFilter.click()  //submit the form
   return false
  }
  else{
  return true
 }
}
```

### Site 02

<http://www.nutes.ufpe.br/contato-nutes/>

![texto](Site%2002.png)

- O site Selecionado foi o portal do Núcleo De Telessaúde da Universidade Federal de Pernambuco, na sessão de contatos.

- A tag escolhida:

``` html
<script type="text/javascript" src="http://www.nutes.ufpe.br/wp-content/themes/ample/js/contato/contato.js?ver=1" id="contato-js"></script>
```

- Dentro do arquivo contato.js tem uma função chamada checarCPF que tem como objetivo verificar se um número de CPF (Cadastro de Pessoa Física) é válido ou não. A função executa uma série de cálculos com os dígitos do CPF para determinar se ele atende aos critérios de validade.

- Segue código abaixo:

``` javascript
function checaCPF(cpf) {
  let numeros, digitos, soma, i, resultado, digitos_iguais;

  digitos_iguais = 1;

  if (cpf.length < 11) return false;

  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  }

  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;
    for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;
    numeros = cpf.substring(0, 10);
    soma = 0;
    for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;
    return true;
  } else return false;
}
```
