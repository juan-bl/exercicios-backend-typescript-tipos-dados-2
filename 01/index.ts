// const fs = require('fs')

// function leitura(): void {
//     const arquivo: string = fs.readFileSync('../bd.json')

//     return console.log(JSON.parse(arquivo));
// }

// function escrever(): void {
//     const arquivo: string = fs.readFileSync('../bd.json')

//     const arquivoParse = JSON.parse(arquivo)

//     arquivoParse.push({
//         nome: 'Gabriel',
//         idade: 21
//     })

//     const arquivoStringify = JSON.stringify(arquivoParse)

//     console.log(arquivoStringify);

//     fs.writeFileSync('../bd.json', arquivoStringify)
// }

// leitura();
// escrever()