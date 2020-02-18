//Criar um programa que calcula a média
// das notes entre os alunos e envia
// mensagem do calculo da media
// const aluno01 = "yasmin"
// const noteAluno01 = 9.8

// const aluno02 = 'yasim'
// const noteAluno02 = 10

// const aluno03 = 'fulana'
// const noteAluno03 = 2

//printa o tipo da variavel aluno01
// console.log(typeof aluno01)

// const media = (noteAluno01 + noteAluno02 + noteAluno03) / 3

// if (media > 5) {
//     console.log(`A note foi de ${media}, Parabéns`)
// } else {
//     console.log(`A média é menor que 5`)
// }


//objetos
// const aluno = {
//     name: 'Yasmin',
//     note: 9.7
// }

//retorna a note
// console.log(aluno.note)

//arrays - vetores
const alunosDaTurmaA = [
    {
        name: 'Dalton',
        note: 8.9,
    },
    {
        name: 'Henrique',
        note: 8.6
    },
    {
        name: 'Rosa',
        note: 9.8
    }
]

const alunosDaTurmaB = [
    {
        name: 'Yasmin',
        note: 3
    },
    {
        name: 'Felipe',
        note: 2
    },
    {
        name: 'Daniel',
        note: 3.5
    }
]

// function calculaMedia(alunos) {
//     return ((alunos[0].note + alunos[1].note + alunos[2].note) / 3)
// }

// const media1 = calculaMedia(classA)
// const media2 = calculaMedia(alunosDaTurmaB)


// function enviaMensagem(media, turma) {

//     if (media > 5) {
//         console.log(`A note da turma ${turma} foi de ${media}, Parabéns`)
//     } else {
//         console.log(`A média da turma ${turma} é menor que 5`)
//     }

// }



function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].note
    }
    const media = soma / alunos.length
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {

    if (media > 5) {
        console.log(`A note da turma ${turma} foi de ${media}, Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }

}

enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')

// Marcar aluno como reprovado se a note for menor que 5
//e tambem enviar uma mensagem

function marcarComoReprovado(alunos) {
    alunos.reprovado = false;
    if (alunos.note < 5) {
        alunos.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.name} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for ( let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaB)