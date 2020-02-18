const programador = {
    nome: 'Yasmin',
    idade: 21,
    tecnologias: [
        {nome: 'Python', especialidade: 'Datascience'},
        {nome: 'Ruby', especialidade: 'Web'}
    ]
}

console.log(`A programadora ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
