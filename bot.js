const venom = require('venom-bot');

venom.create({ session: 'bot' })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage(async (message) => {
    switch (message.body) {
      case '1':
        await client.sendText(message.from, "Confira nosso catálogo de sabores em nosso site: https://licordecachoeira.com.br/produtos/");
        break;
      case '2':
        await client.sendText(message.from, "Se seu pedido chegou quebrado, continue aqui, e entraremos em contato para resolvermos isso o mais rápido possível.");
        break;
      case '3':
        await client.sendText(message.from, "Para rastrear seu pedido, acesse nosso site e faça login na sua conta. Lá você encontrará todas as informações de rastreamento.");
        break;
      case '4':
        await client.sendText(message.from, "Infelizmente não estamos vendendo em atacado, apenas varejo");
        break;
      case '5':
        await client.sendText(message.from, "Nossos licores cremosos têm uma validade de 6 meses a 1 ano, desde que mantidos refrigerados, pois utilizam-se na composição leite condensado. Os licores tradicionais têm data de validade de 5 a 8 anos.");
        break;
      default:
        await client.sendText(message.from, "Olá! Seja bem-vindo à Licor de Cachoeira.\n\n" +
          "Selecione uma das opções abaixo:\n" +
          "1 - Catálogo de sabores\n" +
          "2 - Meu pedido quebrou, o que fazer?\n" +
          "3 - Onde consigo rastrear meu pedido?\n" +
          "4 - Informações sobre compras no atacado\n" +
          "5 - Data de validade dos produtos\n\n" +
          "Digite o número correspondente à sua escolha.");
        break;
    }
  });
}