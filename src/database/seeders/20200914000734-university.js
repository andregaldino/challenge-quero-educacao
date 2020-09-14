'use strict'

const universities = [
  {
    name: 'UNIP',
    score: 4.5,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/unip.png',
  },
  {
    name: 'Anhembi Morumbi',
    score: 4.2,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png',
  },
  {
    name: 'UNICSUL',
    score: 3.9,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
  },
  {
    name: 'Anhanguera',
    score: 3.5,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/anhanguera.png',
  },
  {
    name: 'Estácio',
    score: 4.1,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/estacio.png',
  },
  {
    name: 'Unopar',
    score: 4,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/unopar.png',
  },
  {
    name: 'ETEP',
    score: 3.2,
    logo_url: 'https://www.tryimg.com/u/2019/04/16/etep.png',
  },
]

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('universities', universities)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('universities', null, {})
  },
}
