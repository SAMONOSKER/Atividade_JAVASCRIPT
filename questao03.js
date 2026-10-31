let idade = 15;

if (idade <= 0) {
  console.log("Idade inválida!");
}

if (idade < 18) {
  console.log("Menor de idade");
}

if (idade >= 18 && idade <= 60) {
  console.log("Maior de idade!");
} else if (idade > 60) {
  console.log("Idoso");
}