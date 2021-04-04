var pontos = 0

alert("Seja Bem Vindo ao Quiz Harry Potter, cheio de perguntas sobre esse mundo fantástico. Vamos lá!")

var resposta1 = parseInt(prompt("As bolas de quadribol são balaço, pomo de ouro e: \n1 - Boles\n2 - Goles\n3 - Toles\n4 - Doles"))

if (resposta1 == 2){
  alert("Parabéns, você acertou!! + 1 Ponto. Agora sim podemos começar")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Harry Potter. Como que você errou isso?🤦‍♂️")
}

var resposta2 = parseInt(prompt("Qual dessas NÃO é uma das Maldições Imperdoáveis? \n1 - Maldição Cruciatus\n2 - Maldição Imperius\n3 - Sectumsempra\n4 - Feitiço da morte"))

if (resposta2 == 3){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Sectumsempra.")
}

var resposta3 = parseInt(prompt("Quantos irmãos Weasley existem?\n1 - 5\n2 - 7\n3 - 10\n4 - 3"))

if (resposta3 == 2){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era 7.")
}

var resposta4 = parseInt(prompt("De qual plataforma King's Cross sai o Expresso de Hogwarts?\n1 - Oito e um quarto\n2 - Nove e três quartos\n3 - Cinco anos e meio\n4 - Onze"))

if (resposta4 == 2){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Nove e três quartos")
}

var resposta5 = parseInt(prompt("Qual é o modelo da primeira vassoura que Harry já recebeu?\n1 - Nimbus 2000\n2 - Cleansweep Ones\n3 - Aspirador\n4 - Firebolt"))

if (resposta5 == 1){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Nimbus 2000.")
}

var resposta6 = parseInt(prompt("Onde a Armada de Dumbledore se encontra em 'Harry Potter e a Ordem da Fênix'?\n1 - A Sala Necessária\n2 - Sala Comum da Grifinória\n3 - Casa de Hagrid\n4 - A Cabana dos Gritos"))

if (resposta6 == 1){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era A Sala Necessária.")
}

var resposta7 = parseInt(prompt("Como você convoca um Patrono?\n1 - Patronia Paternus\n2 - Expelliarmus Patronicha\n3 - Accio Patronus\n4 - Expecto Patronum"))

if (resposta7 == 4){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Expecto Patronum.")
}

var resposta8 = parseInt(prompt("Quais são os primeiros nomes dos filhos de Harry?\n1 - Tiago, Alvo, Lílian\n2 - James, Tiago, Lílian\n3 - Tiago, Severo, Gina\n4 - Alvo, Tiago, Luna"))

if (resposta8 == 1){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Tiago, Alvo, Lílian.")
}

var resposta9 = parseInt(prompt("Qual a horcrux que Régulo Black pega?\n1 - Anel dos Gaunt\n2 - Diadema de Ranveclaw\n3 - O medalhão de Slytherin\n4 - A taça de Hufflepuff Junior"))

if (resposta9 == 3){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era O medalhão de Slytherin.")
}

var resposta10 = parseInt(prompt("Quando acontece Priori Incantatem?\n1 - Quando uma varinha muda de dono\n2 - Quando duas varinhas possuem núcleos semelhantes\n3 - Quando duas varinhas vêm da mesma madeira\n4 - Quando são lançados feitiços semelhantes"))

if (resposta10 == 2){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Quando duas varinhas possuem núcleos semelhantes.")
}

var resposta11 = parseInt(prompt("Do que é feito o núcleo da varinha de Harry Potter?\n1 - Pelo de unicórnio\n2 - Pena de fênix\n3 - Pelo de rougarou\n4 - Chifre de basilisco"))

if (resposta11 == 2){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Pena de fênix.")
}

var resposta12 = parseInt(prompt("Qual frase abria o mapa do maroto?\n1 - 'Malfeito feito'\n2 - 'Em nome do senhores aluado, rabicho, almofadinhas e pontas'\n3 - 'Eu juro solenemente não fazer nada de bom'\n4 - Feitiço 'Revelio'"))

if (resposta12 == 3){
  alert("Parabéns, você acertou!! + 1 Ponto")
  pontos = pontos + 1
} else{
  alert("Errado, a resposta certa era Eu juro solenemente não fazer nada de bom.")
}

var respostaextra = parseInt(prompt("Pergunta extra: Qual a pior adaptação?\n1 - Pedra Filosofal\n2 - Cálice de Fogo\n3 - Enigma do Príncipe\n4 - Câmara Secreta"))

if (respostaextra == 3){
  alert("Parabéns, você concorda comigo. Oque eles transformaram o livro nesse filme foi um absurdo! RIP cena do Enterro de Dumbledore ☹")
} else{
  alert("Puts, você acha esse o pior mesmo? Enigma do Príncipe, na minha opinião, é a pior adaptação, o que eles fizeram transformando o livro nesse filme foi triste. RIP cena do Enterro de Dumbledore ☹")
}

alert("Sua potuação: " + pontos)

document.write("<h2>", "Sua Pontuação: ", pontos, "</h2>")
