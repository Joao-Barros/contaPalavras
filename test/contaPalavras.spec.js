const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras} = require('../contaPalavras');
lab.experiment('Calculando o total de palavras da seguintes frases:', () => {
  lab.test('Deve somar o total de palavras', (done) => {
    expect(contaPalavras("Meu nome é João, eu programo JavaScript")).to.equal({ numeroPalavras: 7 });
    expect(contaPalavras("também programo C")).to.equal({ numeroPalavras: 3 });
    expect(contaPalavras("também codifico HTML, que não é programar pq é linguagem de marcação")).to.equal({ numeroPalavras: 12 });
    expect(contaPalavras("também codifico em CSS, que não é programar pq é linguagem de estilo")).to.equal({ numeroPalavras: 13 });
    done();
  });
});
