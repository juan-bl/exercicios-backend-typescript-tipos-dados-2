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

function filtrar(profissao: string): void {
  const arquivo: string = fs.readFileSync("../bd.json");

  let arquivoParse = JSON.parse(arquivo);

  const array: string = arquivoParse.filter((pessoa: Usuario) => {
    return pessoa.profissao === profissao;
  });

  if (array.length === 0) {
    return console.log('Não existe usuário com essa profissao');
  }

  return console.log(array);
}

filtrar("dev");
