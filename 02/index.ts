const fs = require("fs");

type Endereco = {
  cep: string;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
};

type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  profissao?: string;
  endereco?: Endereco | null;
};

function leitura(): void {
  const arquivo: string = fs.readFileSync("../bd.json");

  return console.log(JSON.parse(arquivo));
}

function escrever(usuario: Usuario): void {
  const arquivo: string = fs.readFileSync("../bd.json");

  let novoUsuario: Usuario = usuario;

  const arquivoParse = JSON.parse(arquivo);

  if (!usuario.endereco) {
    novoUsuario = { ...usuario, endereco: null };
  }
  arquivoParse.push(novoUsuario);

  const arquivoJson: string = JSON.stringify(arquivoParse);

  fs.writeFileSync("../bd.json", arquivoJson);

  return console.log(novoUsuario);
}

leitura();
// escrever({
//   nome: "Mateus",
//   email: "mateus@email.com",
//   cpf: "12345678910",
// });
