'use strict'

const campuses = [
  { name: 'Jardim das Indústrias', city: 'São José dos Campos' },
  { name: 'Água Branca', city: 'São Paulo' },
  { name: 'Jaguaré', city: 'São Paulo' },
  { name: 'Parque São Jorge', city: 'São Paulo' },
  { name: 'Paraíso', city: 'São Paulo' },
  { name: 'Vila Olímpia', city: 'São Paulo' },
  { name: 'Bela Vista', city: 'São Paulo' },
  { name: 'Paulista', city: 'São Paulo' },
  { name: 'Anália Franco', city: 'São Paulo' },
  { name: 'Liberdade', city: 'São Paulo' },
  { name: 'São Miguel Paulista', city: 'São Paulo' },
  { name: 'Rio Comprido', city: 'São José dos Campos' },
  { name: 'Patriolino Ribeiro', city: 'Fortaleza' },
  { name: 'Centro', city: 'Jacareí' },
  { name: 'Centro', city: 'São José dos Campos' },
  { name: 'São José dos Campos', city: 'São José dos Campos' },
  { name: 'Motorama', city: 'São José dos Campos' },
  { name: 'Jardim Esplanada', city: 'São José dos Campos' },
]

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('campuses', campuses)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('campuses', null, {})
  },
}
