export default () => ({
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connectionString: process.env.MONGO_DB_CONNECTION,
  },
  security: { 
    encryptionSecretKey: process.env.ENCRYPTION_KEY,
  },
});
