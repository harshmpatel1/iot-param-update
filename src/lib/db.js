const sql = require('mssql');

const dbConfig = {
    user: 'sa',
    password: 'Eastmen@123',
    server: '184.168.124.9',
    database: 'eastmenone',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    pool: {
        max: 20,
        idleTimeoutMillis: 30000,
        acquireTimeoutMillis: 60000
    },
     requestTimeout: 60000
};

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

const executeQuery = async (query, params = {}) => {
    try {
        await poolConnect;
        const request = pool.request();

        for (const key in params) {
            request.input(key, params[key]);
        }

        const result = await request.query(query);
        return result.recordset;
    } catch (err) {
        console.error('SQL Server query failed: ', err);
        throw err;
    }
};

module.exports = { executeQuery,pool };