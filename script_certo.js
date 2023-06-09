/*
 *  Script com a lógica do relógio digital.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio.
 *  1. Utilizando o método Date() do javaScript para retorna um objeto de data com
 *     a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o HTML chamando o método timer(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo textContent dos elementos retornados.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval'.
 */

  function timer() {
  
  let novaHora = new Date();
  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundo = novaHora.getSeconds();


  document.getElementById('horas').textContent = hora;
  document.getElementById('minutos').textContent = minuto;
  document.getElementById('segundos').textContent = segundo;

  }

  setInterval(timer, 1000);
    
 

  // TODO (continuar implementacao) ...

/** Chamada da função de time para funcionar o relógio usando o método 'setInterval'*/
