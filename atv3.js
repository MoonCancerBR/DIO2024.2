let heroi = {
    nome: "Pedrinho",
    idade: 10,
    tipo: "mago"
  };
  
  if  (heroi.tipo === "ninja") {
    ataque = 'shuriken'
  }
  else if (heroi.tipo == 'guerreiro'){
    ataque = 'espada'
  }
  else if (heroi.tipo == 'monge'){
    ataque = 'artes marciais'
  }  
  else if (heroi.tipo == 'mago'){
    ataque = 'magia'
  }
console.log(`o ${heroi.tipo} atacou usando ${ataque}`);
