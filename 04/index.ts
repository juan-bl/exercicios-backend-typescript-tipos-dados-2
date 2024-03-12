// const fs = require("fs");

// type Endereco = {
//   cep: string;
//   rua: string;
//   complemento?: string;
//   bairro: string;
//   cidade: string;
// };

// type Usuario = {
//   nome: string;
//   email: string;
//   cpf: string;
//   profissao?: string;
//   endereco?: Endereco | null;
// };

// function excluir(cpf: string): void {
//   const arquivo: string = fs.readFileSync("../bd.json");

//   let arquivoParse = JSON.parse(arquivo);

//   const index: number = arquivoParse.findIndex((pessoa: Usuario) => {
//     return pessoa.cpf === cpf;
//   });

//   if (index === -1) {
//     return console.log('Não existe usuário com esse cpf.');
//   }
  
//   const usuarioExcluido = arquivoParse.splice(index, 1)

//   const arquivoJson: string = JSON.stringify(arquivoParse);

//   fs.writeFileSync("../bd.json", arquivoJson);

//   return console.log(usuarioExcluido[0]);
// }

// excluir("00000000000");
