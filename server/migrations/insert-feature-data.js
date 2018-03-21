const featureData = [
  {
    name: 'feature001',
    emails: 'john@john.com,sally@sally.com',
    enabled: true,
    ratio: '2:5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'feature002',
    emails: 'john@john.com',
    enabled: true,
    ratio: '1:5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'feature003',
    emails: 'harry@harry.com,ali@ali.com',
    enabled: true,
    ratio: '2:5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'feature004',
    emails: 'sally@sally.com,harry@harry.com,ali@ali.com',
    enabled: false,
    ratio: '2:5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'feature005',
    emails: 'ali@ali.com',
    enabled: false,
    ratio: '1:5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('features', featureData, {}),
  down: queryInterface => queryInterface.bulkDelete('features', null, {}),
};
