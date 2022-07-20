const productDetails = require('../src/productDetails');


/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:

    // Teste se productDetails é uma função.
      expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
      expect(Array.isArray(productDetails())).toBeTruthy();

    // Teste se o array retornado pela função contém dois itens dentro.
      let itens = productDetails.length;
      expect(itens).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const param = productDetails('Álcool em Gel', 'Máscara');
    for (let i = 0; i < param.length; i+= 1) {
      expect(typeof param).toBe('object');   
    }
    

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
        expect(param[0] === param[1]).toBe(false);
       


    // Teste se os dois productIds terminam com 123.
    let array = productDetails('Álcool em Gel', 'Máscara');
    for (let i = 0; i < array.length; i+= 1) {
      const product = array[i].details.productId;
      expect(product.substring(product.length -3)).toBe('123')
     
      
    }
  });
});
