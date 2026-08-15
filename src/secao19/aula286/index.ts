// Type assertion NÃO faz conversão de tipos: Isso aqui não transforma o valor em outro tipo:
let valor1 = "123" as unknown as number; // Ainda é uma string, mas o TypeScript pensa que é number
//Isso só engana o TypeScript — em runtime continua sendo string.
// Para converter de verdade, use:
let valor2 = Number("123"); // Agora é realmente um number

{
  let valor = "123" as unknown as number;
}
{
  let valor = Number("123");
}