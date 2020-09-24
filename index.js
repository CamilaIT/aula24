//Solucao Callback

function obtemDadosDoUsuario(callback) {
  setTimeout(function() {
    var usuario = {
      nome: "Marcela",
      idade: 55,
      email: "marcelapazeamor@gmail.com"
    };

    callback(usuario);

    // return usuario;
  }, geraTempoAleatorio(5));
}

function obtemSaldoBancario(usuario, callback) {
  setTimeout(function() {
    var saldo = {
      saldo: 3000
    };

    callback(saldo);

    //return saldo;
  }, geraTempoAleatorio(5))
}

function obtemInvestimentos(usuario, callback) {
  setTimeout(function() {
    var investimentos =  {
      cdb: 1000,
      tesouroDireto: 8000,
      lci: 50000
    };

    callback(investimentos);
    //return investimentos;
  }, geraTempoAleatorio(5))
}

function geraTempoAleatorio(range) {
  return Math.floor(Math.random() * range + 1) * 1000;
}


/** o que precisamos fazer para que o código funcione? 
 * 
 * ps: não podemos mexer no setTimeout, eles simulam o tempo que
 * a requisição na internet demora para responder.
 * 
*/
function imprimeDadosDoUsuario() {
  obtemDadosDoUsuario(function(usuario) {
    console.log("Dados: \n", usuario);
    obtemSaldoBancario(usuario, function(saldo){
      console.log("Saldo: \n", saldo);
      obtemInvestimentos(usuario, function(investimentos) {
        console.log("Investimentos: \n", investimentos);
      });
    });
  });

}

imprimeDadosDoUsuario();