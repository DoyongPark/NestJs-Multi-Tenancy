export default () => ({
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connectionString: 'mongodb://inventis:dpass%40word@20.196.96.247:27017/dealer365-nyc?authSource=admin',
  },
  security: { 
    encryptionSecretKey: process.env.ENCRYPTION_KEY,
  },
});
