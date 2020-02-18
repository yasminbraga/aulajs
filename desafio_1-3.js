const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

// for ( let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

function checarSeUsuarioUsaCSS(usuario) {
    if (usuario.tecnologias.includes('CSS') ) {
        return true
    }
    return false 
}


function checarSeUsuarioUsaCSS(usuario) {
    return usuario.tecnologias.includes('CSS') 
        ? true
        : false 
}

for ( let i = 0; i < usuarios.length; i++ ) {
    const usuarioTrabalhaComCSS = checarSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
