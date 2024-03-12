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

function detalhar(cpf: string): void {
  const arquivo: string = fs.readFileSync("../bd.json");

  const arquivoParse = JSON.parse(arquivo);

  const usuario: Usuario = arquivoParse.find((pessoa: Usuario) => {
    return pessoa.cpf === cpf;
  });

  console.log(usuario);
}

function atualizar(cpf: string, objeto: Usuario): void {
  const arquivo: string = fs.readFileSync("../bd.json");

  const arquivoParse = JSON.parse(arquivo);

  const index: number = arquivoParse.findIndex((pessoa: Usuario) => {
    return pessoa.cpf === cpf;
  });

  arquivoParse[index] = objeto;

  if (!arquivoParse[index].endereco) {
    arquivoParse[index] = { ...arquivoParse[index], endereco: null };
  }

  const arquivoJson: string = JSON.stringify(arquivoParse);

  fs.writeFileSync("../bd.json", arquivoJson);

  return console.log(arquivoParse[index]);
}

// detalhar('50000000000')
atualizar("10000000000", {
  nome: "Teste",
  email: "teste",
  cpf: "00000000000",
});
