Back end de uma concessionária feito em Typescript, utilizando o paradiga de programação orientada à objetos.
 Foi utilizado o ODM mongoose para interação com o banco de dados MongoDB, express para lidar com requisições HTTP, 
 utlizei o design pattern Factory Method, JOI para validação de requisições e MSC como arquitetura de Software.
 
 Até o momento possui endpoint de carros, motos e caminhões, e pela aplicação de princípios de SOLID é possível facil e rapidamente 
 adicionar novas features e/ou tipos de veículos. A API tem a funcionalidade de listar, cadastrar, atualizar ou excluir um veículo.
 
 É importante citar que foi desenvolvido testes de unidade para camada Service, chegando a 100% de coverage pra essa pasta. Para os testes, foram utilizados as bibliotecas chai, sinon, e Mocha.
